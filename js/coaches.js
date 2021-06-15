const container = document.getElementById("category-container");
var itemsPerPage = 3;
var categoryNames = ["Fashion", "Technology", "Food Industry"];
var categoryPagingIndex = [0,0,0];
var data = [
    [
        {image:"assets/coaches/0/0.jpg",name:"Amancio Ortega", email:"Amancio.Ortega@zara.com", phone:"08-123-456-7890", rating:4, experience:"4 years in business", description:"Amancio Ortega Gaona (Spanish pronunciation: [aˈmanθjo oɾˈteɣa ɣaˈona]; born 28 March 1936) is a Spanish billionaire businessman. He is the founder and former chairman of Inditex fashion group, best known for its chain of Zara clothing and accessories shops. As of April 2021, Ortega had a net worth of $71 billion, making him the second-wealthiest person in Europe after Bernard Arnault, and the thirteen-wealthiest in the world. For a brief period of time in 2015, he was the richest man in the world, surpassing Bill Gates when his net worth peaked to $80 billion as Zara's parent company, Inditex's, stock peaked. ", companies:"Inditex (CEO)", links:"https://www.linkedin.com/in/amancio-ortega-3550121b3/"},
        {image:"assets/coaches/0/1.jpg",name:"Delphine Arnault", email:"Delphine_Arnault@LVMH.com", phone:"08-123-456-1230", rating:5, experience:"4 years in fashion", description:"Delphine Arnault (born 4 April 1975) is a French businesswoman, director and executive vice president of Louis Vuitton (LVMH Group). Since 2003, she has been a member of the management board of the group LVMH, the first woman and youngest person to occupy that post.", companies:"LVMH Group (Vice President)", links:"https://www.linkedin.com/in/delphine-arnault-b83a243a/"},
        {image:"assets/coaches/0/2.jpg",name:"Karl-Johan Persson", email:"Karl@hm.com", phone:"08-123-456-7390", rating:5, experience:"13 years in fashion", description:"Karl-Johan Erling Göran Persson (born 25 March 1975) is a Swedish billionaire businessman and former president and CEO of the fashion company Hennes & Mauritz (H&M), founded by his grandfather Erling Persson. As of May 2019, according to Forbes, he has a net worth of US$1.6 billion. ", companies:"Hennes & Mauritz (H&M) (CEO)", links:"https://www.linkedin.com/company/h&m/"},
        {image:"assets/coaches/0/3.jpg",name:"Chip Wilson", email:"Chip.Wilson@lululemon.com", phone:"08-456-456-7890", rating:5, experience:"20 years in business", description:"Dennis J. Chip Wilson (born 1955) is a Canadian billionaire, businessman and philanthropist, who has founded several retail apparel companies, most notably yoga-inspired athletic apparel company Lululemon Athletica Inc (TSX: LLL, NASDAQ: LULU). Wilson is widely considered to be the creator of the athleisure trend. In 2016, he organized his personal and business interests into the holding company Hold It All Inc.", companies:"Lululemon Athletica (Founder)", links:"https://chipwilson.com/"},
        {image:"assets/coaches/0/4.jpg",name:"Tamara Mellon", email:"Tamara.Mellon@gmail.com", phone:"08-123-123-7890", rating:5, experience:"5 years in business", description:"Tamara Mellon, OBE is best known as the Founder of Jimmy Choo. She was its Chief Creative Officer from its inception in 1996 through to its acquisition by new owners in late 2011. Jimmy Choo remains a British company and Tamara built it into one of the world's most prominent and innovative luxury brands. She was responsible for the company's creative vision and was the central figure in the business' development and strategic direction. Tamara oversaw the growth of Jimmy Choo from a single London boutique to an internationally respected brand, with over 100 stores globally, from San Francisco to Shanghai. ", companies:"Jimmy Choo (Founder)", links:"https://www.linkedin.com/in/tamaramellon/"},
        {image:"assets/coaches/0/5.jpg",name:"John Doe6", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/0/6.jpg",name:"John Doe7", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/0/7.jpg",name:"John Doe8", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/0/8.jpg",name:"John Doe9", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
    ],
    [
        {image:"assets/coaches/1/0.jpg", name:"John Doe1", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/1/1.jpg", name:"John Doe2", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/1/2.jpg", name:"John Doe3", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/1/3.jpg", name:"John Doe4", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/1/4.jpg", name:"John Doe5", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/1/5.jpg", name:"John Doe6", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/1/6.jpg", name:"John Doe7", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/1/7.jpg", name:"John Doe8", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/1/8.jpg", name:"John Doe9", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
    ],
    [
        {image:"assets/coaches/2/0.jpg", name:"John Doe1", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/2/1.jpg", name:"John Doe2", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/2/2.jpg", name:"John Doe3", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/2/3.jpg", name:"John Doe4", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/2/4.jpg", name:"John Doe5", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/2/5.jpg", name:"John Doe6", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/2/6.jpg", name:"John Doe7", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/2/7.jpg", name:"John Doe8", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
        {image:"assets/coaches/2/8.jpg", name:"John Doe9", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business", description:"", companies:"", links:""},
    ],
];

var windowWidth = $(window).width();
if(windowWidth < 633){
    itemsPerPage = 1;
    seed();
}else if(windowWidth < 906){
    itemsPerPage = 2;
    seed();
}
else{
    itemsPerPage = 3;
    seed();
}

$(window).on('resize', function(event){
    var windowWidth = $(window).width();
    if(windowWidth < 633){
        if(itemsPerPage != 1){
            var oldItemsPerPage = itemsPerPage; // 3
            itemsPerPage = 1;
            for (let i = 0; i < categoryPagingIndex.length; i++) {
                var categoryIndex = categoryPagingIndex[i]; // 1
                var currentElement = categoryIndex * oldItemsPerPage; // 3
                categoryPagingIndex[i] = Math.floor(currentElement / itemsPerPage);
            }
            seed();
        }
    }else if(windowWidth < 906){
        if(itemsPerPage != 2){
            var oldItemsPerPage = itemsPerPage; // 3
            itemsPerPage = 2;
            for (let i = 0; i < categoryPagingIndex.length; i++) {
                var categoryIndex = categoryPagingIndex[i]; // 1
                var currentElement = categoryIndex * oldItemsPerPage; // 3
                categoryPagingIndex[i] = Math.floor(currentElement / itemsPerPage);
            }
            seed();
        }
    }
    else{
        if(itemsPerPage != 3){
            var oldItemsPerPage = itemsPerPage; // 3
            itemsPerPage = 3;
            for (let i = 0; i < categoryPagingIndex.length; i++) {
                var categoryIndex = categoryPagingIndex[i]; // 1
                var currentElement = categoryIndex * oldItemsPerPage; // 3
                categoryPagingIndex[i] = Math.floor(currentElement / itemsPerPage);
            }
            seed();
        }
    }
});

function seed() {
    container.innerHTML = '';
    for (let i = 0; i < categoryNames.length; i++) {
        var categoryName = categoryNames[i];
        var coaches = data[i];
    
        //title
        var title = document.createElement("h1");
        title.innerText = categoryName;
        title.classList.add("category-title");
        container.appendChild(title);
    
        //card container container 
        var cardContainerContainer = document.createElement("div");
        cardContainerContainer.classList.add("card-container-container");
    
        //left button
        if(coaches.length > itemsPerPage){
            var leftBtn = document.createElement("button");
            leftBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M15 4l-8 8l8 8" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>';
            leftBtn.classList.add("btn");
            leftBtn.id = 'leftBtn' + i;
            leftBtn.onclick = function() {previous(i)};
            cardContainerContainer.appendChild(leftBtn);
        }
    
        //card container
        var cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        cardContainer.id = 'cardContainer' + i;
    
        //cards
        var startIndex = categoryPagingIndex[i] * itemsPerPage;
        for (let j = startIndex ; j < startIndex + itemsPerPage; j++) {
            if(j < coaches.length){
                const coach = coaches[j];
                var card = document.createElement("div");
                card.classList.add("card");
                //photo
                var photo = document.createElement("div");
                photo.classList.add("profile-photo-container");
                photo.style.backgroundImage = "url("+coach.image+")";
                card.appendChild(photo);
                //detail
                var cardDetail = document.createElement("div");
                cardDetail.classList.add("card-detail");
                //detail fields
                var fullName = document.createElement("h4");
                fullName.innerText = coach.name;
                fullName.classList.add("card-heading");
                cardDetail.appendChild(fullName);
        
                var email = document.createElement("p");
                email.innerText = coach.email;
                email.classList.add("card-text");
                email.style.fontWeight = "bold";
                cardDetail.appendChild(email);
        
                var phone = document.createElement("p");
                phone.innerText = coach.phone;
                phone.classList.add("card-text");
                phone.style.fontWeight = "bold";
                cardDetail.appendChild(phone);
        
                var rating = document.createElement("p");
                rating.innerText = coach.rating;
                rating.classList.add("card-text");
                cardDetail.appendChild(rating);
        
                var exp = document.createElement("p");
                exp.innerText = coach.experience;
                exp.classList.add("card-text");
                cardDetail.appendChild(exp);
        
                //append
                card.appendChild(cardDetail);
                cardContainer.appendChild(card);
            }
        }
    
        //append card container to cardContainerContainer
        cardContainerContainer.appendChild(cardContainer);
    
        //right button
        if(coaches.length > itemsPerPage){
            var rightBtn = document.createElement("button");
            rightBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M8 4l8 8l-8 8" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>';
            rightBtn.classList.add("btn");
            rightBtn.id = 'rightBtn' + i;
            rightBtn.onclick = function() {next(i)};
            cardContainerContainer.appendChild(rightBtn);
        }
    
        //append card container container
        container.appendChild(cardContainerContainer);
    }
}

function next(categoryId) {
    //calculate total page
    var totalPage = Math.floor(data[categoryId].length / itemsPerPage); 
    //12 / 3 = 4
    if(data[categoryId].length % itemsPerPage != 0) totalPage = totalPage + 1;
    //13 / 3 = 4 + 1 = 5

    categoryPagingIndex[categoryId] = (categoryPagingIndex[categoryId] + 1) % totalPage;

    var cardContainer = document.getElementById('cardContainer' + categoryId);

    //remove old children
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.lastChild);
    }

    //add new children
    //0 -> 0 2
    //1 -> 3 5
    //3 -> 9 11
    var startIndex = categoryPagingIndex[categoryId] * itemsPerPage;
    //cards
    for (let j = startIndex; j < startIndex + itemsPerPage; j++) {
        if(j < data[categoryId].length){
            const coach = data[categoryId][j];
            var card = document.createElement("div");
            card.classList.add("card");
            //photo
            var photo = document.createElement("div");
            photo.classList.add("profile-photo-container");
            photo.style.backgroundImage = "url("+coach.image+")";
            card.appendChild(photo);
            //detail
            var cardDetail = document.createElement("div");
            cardDetail.classList.add("card-detail");
            //detail fields
            var fullName = document.createElement("h4");
            fullName.innerText = coach.name;
            fullName.classList.add("card-heading");
            cardDetail.appendChild(fullName);

            var email = document.createElement("p");
            email.innerText = coach.email;
            email.classList.add("card-text");
            email.style.fontWeight = "bold";
            cardDetail.appendChild(email);

            var phone = document.createElement("p");
            phone.innerText = coach.phone;
            phone.classList.add("card-text");
            phone.style.fontWeight = "bold";
            cardDetail.appendChild(phone);

            var rating = document.createElement("p");
            rating.innerText = coach.rating;
            rating.classList.add("card-text");
            cardDetail.appendChild(rating);

            var exp = document.createElement("p");
            exp.innerText = coach.experience;
            exp.classList.add("card-text");
            cardDetail.appendChild(exp);

            //append
            card.appendChild(cardDetail);
            cardContainer.appendChild(card);
        }
    }
}


function previous(categoryId) {
    //calculate total page
    var totalPage = Math.floor(data[categoryId].length / itemsPerPage); 
    //12 / 3 = 4
    if(data[categoryId].length % itemsPerPage != 0) totalPage = totalPage + 1;
    //13 / 3 = 4 + 1 = 5

    categoryPagingIndex[categoryId] = categoryPagingIndex[categoryId] - 1;
    if(categoryPagingIndex[categoryId] < 0) categoryPagingIndex[categoryId] = totalPage - 1;

    var cardContainer = document.getElementById('cardContainer' + categoryId);

    //remove old children
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.lastChild);
    }

    //add new children
    //0 -> 0 2
    //1 -> 3 5
    //3 -> 9 11
    var startIndex = categoryPagingIndex[categoryId] * itemsPerPage;
    //cards
    for (let j = startIndex; j < startIndex + itemsPerPage; j++) {
        if(j < data[categoryId].length){
            const coach = data[categoryId][j];
            var card = document.createElement("div");
            card.classList.add("card");
            //photo
            var photo = document.createElement("div");
            photo.classList.add("profile-photo-container");
            photo.style.backgroundImage = "url("+coach.image+")";
            card.appendChild(photo);
            //detail
            var cardDetail = document.createElement("div");
            cardDetail.classList.add("card-detail");
            //detail fields
            var fullName = document.createElement("h4");
            fullName.innerText = coach.name;
            fullName.classList.add("card-heading");
            cardDetail.appendChild(fullName);

            var email = document.createElement("p");
            email.innerText = coach.email;
            email.classList.add("card-text");
            email.style.fontWeight = "bold";
            cardDetail.appendChild(email);

            var phone = document.createElement("p");
            phone.innerText = coach.phone;
            phone.classList.add("card-text");
            phone.style.fontWeight = "bold";
            cardDetail.appendChild(phone);

            var rating = document.createElement("p");
            rating.innerText = coach.rating;
            rating.classList.add("card-text");
            cardDetail.appendChild(rating);

            var exp = document.createElement("p");
            exp.innerText = coach.experience;
            exp.classList.add("card-text");
            cardDetail.appendChild(exp);

            //append
            card.appendChild(cardDetail);
            cardContainer.appendChild(card);
        }
    }
}


// Modal
const formSuccessModal = document.getElementById("coaches-modal");

function openCoachesModal() {
    document.body.style.overflowY = "hidden";
    formSuccessModal.style.display = "flex";
}
function closeCoachesModal() {
    formSuccessModal.style.display = "none";
    document.body.style.overflowY = "scroll";
}