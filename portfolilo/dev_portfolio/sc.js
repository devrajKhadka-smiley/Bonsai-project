// function validateform() {
var name = document.forms["contactform"]["name"].value;
var email = document.forms["contactform"]["email"].value;
var subject = document.forms["contactform"]["subject"].value;
var message = document.forms["contactform"]["message"].value;

if (name == "" || email == "" || subject == "" || message == "") {
    alert("Empty field found! Please fill the form completely.");
} else {
    alert("Thank you for your feedback!");
}