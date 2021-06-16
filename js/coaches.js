const container = document.getElementById("category-container");
var itemsPerPage = 3;
var categoryPagingIndex = [0,0,0];

const fullStar = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M10 1l3 6l6 .75l-4.12 4.62L16 19l-6-3l-6 3l1.13-6.63L1 7.75L7 7z" fill="#000000"/></svg>'
const halfStar = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M10 1L7 7l-6 .75l4.13 4.62L4 19l6-3l6 3l-1.12-6.63L19 7.75L13 7zm0 2.24l2.34 4.69l4.65.58l-3.18 3.56l.87 5.15L10 14.88V3.24z" fill="#000000"/></svg>'
const emptyStar = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M10 1L7 7l-6 .75l4.13 4.62L4 19l6-3l6 3l-1.12-6.63L19 7.75L13 7zm0 2.24l2.34 4.69l4.65.58l-3.18 3.56l.87 5.15L10 14.88l-4.68 2.34l.87-5.15l-3.18-3.56l4.65-.58z" fill="#000000"/></svg>' 

const queryParams = new URLSearchParams(window.location.search);

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


// searching
function search() {
    document.getElementById("error-message").style.display = "none";
    var keyword = queryParams.get("search-coach");
    if(keyword == null) 
        return;

    window.data = [[]]; 
    window.categoryNames = [];
    var dataI = 0;
    var dataJ = 0;
    var flag = false;
    var empty = true;
    for (let i = 0; i < allData.length; i++) {
        const category = allCategoryNames[i];
        if(flag == true){
            window.data.push([])
            dataI++;
        }
        flag = false;
        for (let j = 0; j < allData[i].length; j++) {
            const coach = allData[i][j];
            if(category.includes(keyword) || coach.name.includes(keyword)){
                window.data[dataI].push(allData[i][j]);
                dataJ++;
                flag = true;
                empty = false
            }
        }
        if(flag == true){
            window.categoryNames.push(allCategoryNames[i]);
        }
    }
    
    if(empty){
        document.getElementById("error-message").style.display = "block";
    }
}


function seed() {
    search();
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
        
                var rating = document.createElement("div");
                generateStars(rating, coach.rating);
                cardDetail.appendChild(rating);
        
                var exp = document.createElement("p");
                exp.innerText = coach.experience;
                exp.classList.add("card-text");
                cardDetail.appendChild(exp);
        
                //append
                card.appendChild(cardDetail);
                card.onclick = function(){openCoachesModal(coach,i,coach.id)};
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

            var rating = document.createElement("div");
            generateStars(rating, coach.rating);
            cardDetail.appendChild(rating);

            var exp = document.createElement("p");
            exp.innerText = coach.experience;
            exp.classList.add("card-text");
            cardDetail.appendChild(exp);

            //append
            card.appendChild(cardDetail);
            card.onclick = function(){openCoachesModal(coach,categoryId,coach.id)};
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

            var rating = document.createElement("div");
            generateStars(rating, coach.rating);
            cardDetail.appendChild(rating);

            var exp = document.createElement("p");
            exp.innerText = coach.experience;
            exp.classList.add("card-text");
            cardDetail.appendChild(exp);

            //append
            card.appendChild(cardDetail);
            card.onclick = function(){openCoachesModal(coach,categoryId,coach.id)};
            cardContainer.appendChild(card);
        }
    }
}


// Modal
const formSuccessModal = document.getElementById("coaches-modal");
$('#coaches-modal').hide()

function openCoachesModal(coach, categoryId, coachId) {
    document.getElementById("coaches-detail-name").innerText = coach.name;
    document.getElementById("coaches-detail-email").innerText = coach.email;
    document.getElementById("coaches-detail-phone").innerText = coach.phone;
    document.getElementById("coaches-detail-links").innerText = coach.links;
    document.getElementById("coaches-detail-links").href = coach.links;

    document.getElementById("coaches-detail-experience").innerText = coach.experience;
    document.getElementById("coaches-detail-companies").innerText = "Companies: " + coach.companies;
    document.getElementById("coaches-detail-description").innerText = coach.description;

    generateStars(document.getElementById("coaches-detail-rating"), coach.rating);

    document.getElementById("coaches-detail-image").src = coach.image;

    document.getElementById("coaches-detail-button").onclick = function(){redirectToRegister(categoryId, coachId)};

    document.body.style.overflowY = "hidden";
    $('#coaches-modal').fadeIn()
}
function closeCoachesModal() {
    document.body.style.overflowY = "scroll";
    $('#coaches-modal').fadeOut()
}

function generateStars(container, rating) {
    container.innerHTML = "";
    var remainder = (rating*10)%10;
    var ratingCount = 0
    for (let i = 1; i <= rating; i++) {
        container.innerHTML += fullStar;
        ratingCount++;
    }
    if(ratingCount < 5){    
        if(remainder < 3){
            for (let i = ratingCount; i < 5; i++) {
                container.innerHTML += emptyStar;
                ratingCount++;
            }
        }else if(remainder >= 3){
            container.innerHTML += halfStar;
            ratingCount++;
            for (let i = ratingCount; i < 5; i++) {
                container.innerHTML += emptyStar;
                ratingCount++;
            }
        }
    }
}

function redirectToRegister(categoryId, coachId){
    window.location.href = "register.html" + "?categoryid=" + categoryId + "&coachid=" + coachId;
}