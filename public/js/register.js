const queryParams = new URLSearchParams(window.location.search);
var coachid = queryParams.get("coachid");
var categoryid = queryParams.get("categoryid");

const coachContainer = document.getElementById("coach-container");
const coachSelect = document.getElementById("coach");
const categorySelect = document.getElementById("category");

// initialization
var coach = null;
if(categoryid == null){
    categoryid = -1
    queryParams.set("categoryid",categoryid);
    history.replaceState(null,null,"?"+queryParams.toString());
}
if(coachid == null){
    coachid = -1;
    queryParams.set("coachid",coachid);
    history.replaceState(null,null,"?"+queryParams.toString());
}
seedCategory();

function seedCategory() {
    categorySelect.innerHTML = '<option value="-1">-- Any Coach Category --</option>';
    coachSelect.innerHTML = '<option value="-1">-- Any Coach --</option>';
    coachContainer.innerHTML = '';
    if(categoryid == -1){
        for (let i = 0; i < data.length; i++) {
            const category = categoryNames[i];
            categorySelect.innerHTML += '<option value="'+i+'">' + category +'</option>';
            seedCoach(i);
        }
    }else{
        for (let i = 0; i < data.length; i++) {
            const category = categoryNames[i];
            if(i == categoryid){
                categorySelect.innerHTML += '<option selected value="'+i+'">' + category +'</option>';            
                seedCoach(i);
            }else{
                categorySelect.innerHTML += '<option value="'+i+'">' + category +'</option>';
            }
        }
    }
}

function seedCoach(categoryId) {
    for (let j = 0; j < data[categoryId].length; j++) {
        const coach = data[categoryId][j];
        if(j == coachid){
            coachSelect.innerHTML += '<option selected value="'+categoryId+'_'+j+'">' + coach.name +'</option>';
            coachContainer.innerHTML = "";
            var coachImage = document.createElement("img");
            coachImage.src = coach.image;
            coachImage.classList.add("coach-image");
            coachContainer.appendChild(coachImage)
        }else{
            coachSelect.innerHTML += '<option value="'+categoryId+'_'+j+'">' + coach.name +'</option>';
        }
    }
}

// Category on change
function seedCoachBasedOnCategory() {
    categoryid = categorySelect.value
    coachid = -1;
    queryParams.set("categoryid",categoryid);
    queryParams.set("coachid",coachid);
    history.replaceState(null,null,"?"+queryParams.toString());
    seedCategory();
}

// Coach on change
function changeCoachDetail() {
    var splitted = coachSelect.value.split("_");
    categoryid = splitted[0];
    coachid = splitted[1];
    queryParams.set("categoryid",categoryid);
    queryParams.set("coachid",coachid);
    history.replaceState(null,null,"?"+queryParams.toString());
    seedCategory();
}

// Form Validation

const nameErrorMsg = document.getElementById("name-error-msg");
const emailErrorMsg = document.getElementById("email-error-msg");
const phoneErrorMsg = document.getElementById("phone-error-msg");
const genderErrorMsg = document.getElementById("gender-error-msg");
const birthdateErrorMsg = document.getElementById("birthdate-error-msg");
const addressErrorMsg = document.getElementById("address-error-msg");

const formSuccessModal = document.getElementById("form-success-modal");

function validateName() {
    var flag = true;
    var name = document.getElementById("name").value;
    if (name.length == 0) {
        nameErrorMsg.innerText = "Name must be filled. "
        flag = false;
        return flag;
    }

    for(var i=0;i<name.length;i++){
        if(name.charAt(i)!= ' ' && !(name.charAt(i) >= 'a' && name.charAt(i) <= 'z') && !(name.charAt(i) >= 'A' && name.charAt(i) <= 'Z') ){
            nameErrorMsg.innerText = "Name must be alphabetical. "
            flag = false;
            return flag;
        }
    }

    return flag;
}

function validateEmail() {
    var flag = true;
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        emailErrorMsg.innerText = "Email must be filled. "
        flag = false;
        return flag;
    }

    // Email validation
    var lastAtIndex = -1;
    var atCount = 0;
    var lastDotIndex = -1;
    var dotCount = 0;
    for (let i = 0; i < email.length; i++) {
        var c = email.charAt(i);
        if(c == '@'){
            lastAtIndex = i;
            atCount++;
        }
        if(c == '.'){
            lastDotIndex = i;
            dotCount++;
        }
    }
    // contains exactly 1 @
    if(atCount != 1){
        emailErrorMsg.innerText = "Email must be in the correct format (e.g. john@example.com). "
        flag = false;
        return flag;
    }
    // contains minimum 1 .
    if(dotCount < 1){
        emailErrorMsg.innerText = "Email must be in the correct format (e.g. john@example.com). "
        flag = false;
        return flag;
    }

    // @ must not be first character
    if(lastAtIndex == 0){
        emailErrorMsg.innerText = "Email must be in the correct format (e.g. john@example.com). The '@' character must not be the first character."
        flag = false;
        return flag;
    }
    // . must not be last character
    if(lastDotIndex == email.length-1){
        emailErrorMsg.innerText = "Email must be in the correct format (e.g. john@example.com). The '.' character must not be the last character."
        flag = false;
        return flag;
    }

    // cannot contain @ after .
    if(lastAtIndex > lastDotIndex){
        emailErrorMsg.innerText = "Email must be in the correct format (e.g. john@example.com). The '@' character cannot be behind '.' character."
        flag = false;
        return flag;
    }

    // . cannot be directly behind @
    if(email.charAt(lastAtIndex+1) == '.'){
        emailErrorMsg.innerText = "Email must be in the correct format (e.g. john@example.com). The '.' character cannot be directly behind '@' character."
        flag = false;
        return flag;
    }

    return flag;
}

function validatePhone() {
    var flag = true;
    var phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        phoneErrorMsg.innerText = "Phone number must be filled. "
        flag = false;
        return flag;
    }

    for (let i = 0; i < phone.length; i++) {
        var c = phone.charAt(i);
        if( !(c >= '0' && c <= '9') ){
            phoneErrorMsg.innerText = "Phone number must be numeric. "
            flag = false;
            return flag;
        }
    }

    return flag;
}

function validateGender() {
    if(document.getElementById("gender-male").checked || document.getElementById("gender-female").checked){
        return true;
    }else{
        genderErrorMsg.innerText = "Gender must be selected."
        return false;
    }
}

function validateBirthdate() {
    var flag = true;
    var birthdate = document.getElementById("birthdate").value;
    if (birthdate.length == 0) {
        birthdateErrorMsg.innerText = "Birthdate must be filled. "
        flag = false;
        return flag;
    }

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1)
    var birthdate2 = new Date(birthdate)
    if(birthdate2 >= yesterday){
        birthdateErrorMsg.innerText = "Birthdate must be in the past. "
        flag = false;
        return flag;
    }

    return flag;
}

function validateDistrict() {
    if(document.getElementById("district").value == "0"){
        districtErrorMsg.innerText = "District must be selected"
        return false;
    }else{
        return true;
    }
}

function validateAddress() {
    var flag = true;
    var address = document.getElementById("address").value;
    if (address.length == 0) {
        addressErrorMsg.innerText = "Address must be filled. "
        flag = false;
        return flag;
    }


    return flag;
}

function validateCode() {
    var flag = true;
    var code = document.getElementById("code").value;
    if (code.length == 0) {
        codeErrorMsg.innerText = "Postal Code must be filled. "
        flag = false;
        return flag;
    }

    for (let i = 0; i < code.length; i++) {
        var c = code.charAt(i);
        if( !(c >= '0' && c <= '9') ){
            codeErrorMsg.innerText = "Postal code must be numeric. "
            flag = false;
        }
    }

    return flag;
}

function validateAll() {
    var flag = true;
    var errorPlace;
    resetAll();
    if(!validateName()){
        flag = false;
        errorPlace = "name";
    }
    if(!validateEmail()){
        flag = false;
        errorPlace = "email";
    }
    if(!validatePhone()){
        flag = false;
        errorPlace = "phone";
    }
    if(!validateGender()){
        flag = false;
        errorPlace = "gender";
    }
    if(!validateBirthdate()){
        flag = false;
        errorPlace = "birthdate";
    }
    if(!validateAddress()){
        flag = false;
        errorPlace = "address";
    }

    if(flag){
        openFormSuccessModal();
    }else{
        alert("Please fill the form correctly.")
    }
}

function resetAll() {
    nameErrorMsg.innerText = "";
    phoneErrorMsg.innerText = "";
    emailErrorMsg.innerText = "";
    genderErrorMsg.innerText = "";
    birthdateErrorMsg.innerText = "";
    addressErrorMsg.innerText = "";
}

function openFormSuccessModal() {
    formSuccessModal.style.display = "flex";
}
function closeFormSuccessModal() {
    formSuccessModal.style.display = "none";
    window.location.href = "index.html";
}