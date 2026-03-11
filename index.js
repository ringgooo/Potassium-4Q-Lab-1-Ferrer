function validateForm() {
    let text = document.forms["grocery-form"]["customer"].value;
    document.forms["grocery-form"]["customer"].value = text.trim();
    if (text.trim() === ""){
        alert("Enter your name!");
        return false;
    }
    return true;

}
