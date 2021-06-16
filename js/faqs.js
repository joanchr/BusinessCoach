const allFaqs = [
    {question:'Where can I register?',answer:'You can register by clicking the <b>register now</b> button on top of the screen or click <a href="register.html">here</a>.'},
    {question:'Can I register as a coach?',answer:'To ensure our quality of coaches, we only select qualified and experienced coaches. If you want to apply to be a coach, you can contact us directly at <a href="http://mail.google.com/" target="_blank">apply@businesscoach.com</a>.'},
];
var faqs = allFaqs;

const queryParams = new URLSearchParams(window.location.search);
const faqsContainerContainer = document.getElementById("faqs-container-container");
seed();

// searching
function search() {
    document.getElementById("error-message").style.display = "none";
    var keyword = queryParams.get("search-faqs");
    if(keyword == null) 
        return;

    window.faqs = [];
    var empty = true;
    for (let i = 0; i < allFaqs.length; i++) {
        const faq = allFaqs[i];
        if(faq.question.toLowerCase().includes(keyword.toLowerCase()) || faq.answer.toLowerCase().includes(keyword.toLowerCase())){
            window.faqs.push(faq);
            empty = false;
        }
    }
    
    if(empty){
        document.getElementById("error-message").style.display = "block";
    }
}

function seed() {
    search();
    faqsContainerContainer.innerHTML = "";
    for (let i = 0; i < faqs.length; i++) {
        const faq = faqs[i];
        var container = document.createElement("div");
        container.classList.add("faqs-container");

        var question = document.createElement("p");
        question.innerHTML = "Q: " + faq.question;
        container.appendChild(question);
        
        var answer = document.createElement("p");
        answer.innerHTML = "A: " + faq.answer;
        container.appendChild(answer);

        faqsContainerContainer.appendChild(container);
    }
}