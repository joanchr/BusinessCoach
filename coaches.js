const container = document.getElementById("category-container");
var itemsPerPage = 3;
var categoryNames = ["Retail", "Technology", "Food Industry"];
var categoryPagingIndex = [0,0,0];
var data = [
    [
        {name:"John Doe1", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe2", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe3", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe4", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe5", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe6", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe7", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe8", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe9", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe10", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe11", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe12", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"}
    ],
    [
        {name:"John Doe1", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe2", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe3", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe4", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe5", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe6", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe7", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe8", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe9", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe10", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe11", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe12", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"}
    ],
    [
        {name:"John Doe1", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe2", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe3", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe4", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe5", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe6", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe7", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe8", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe9", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe10", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe11", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"},
        {name:"John Doe12", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5, experience:"4 years in business"}
    ]
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
        var leftBtn = document.createElement("button");
        leftBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M15 4l-8 8l8 8" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>';
        leftBtn.classList.add("btn");
        leftBtn.id = 'leftBtn' + i;
        leftBtn.onclick = function() {previous(i)};
        cardContainerContainer.appendChild(leftBtn);
    
        //card container
        var cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        cardContainer.id = 'cardContainer' + i;
    
        //cards
        var startIndex = categoryPagingIndex[i] * itemsPerPage;
        for (let j = startIndex ; j < startIndex + itemsPerPage; j++) {
            const coach = coaches[j];
            var card = document.createElement("div");
            card.classList.add("card");
            //photo
            var photo = document.createElement("div");
            photo.classList.add("profile-photo-container");
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
            cardDetail.appendChild(email);
    
            var phone = document.createElement("p");
            phone.innerText = coach.phone;
            phone.classList.add("card-text");
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
    
        //append card container to cardContainerContainer
        cardContainerContainer.appendChild(cardContainer);
    
        //right button
        var rightBtn = document.createElement("button");
        rightBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M8 4l8 8l-8 8" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>';
        rightBtn.classList.add("btn");
        rightBtn.id = 'rightBtn' + i;
        rightBtn.onclick = function() {next(i)};
        cardContainerContainer.appendChild(rightBtn);
    
        //append card container container
        container.appendChild(cardContainerContainer);
    }
}

function next(categoryId) {
    //calculate total page
    var totalPage = data[categoryId].length / itemsPerPage; 
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
            cardDetail.appendChild(email);

            var phone = document.createElement("p");
            phone.innerText = coach.phone;
            phone.classList.add("card-text");
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
    var totalPage = data[categoryId].length / itemsPerPage; 
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
            cardDetail.appendChild(email);

            var phone = document.createElement("p");
            phone.innerText = coach.phone;
            phone.classList.add("card-text");
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