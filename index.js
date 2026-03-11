function validateForm() {
    let text = document.forms["grocery-form"]["text"].value;
    document.forms["grocery-form"]["text"].value = text.trim();
    if (text.trim() === ""){
        alert("Enter your name!");
        return false;
    }
    return true;

}