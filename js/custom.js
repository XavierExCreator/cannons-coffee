// here in the custon js Selection, 
// we'll be adding the functionality of a form!
// What you'll do when you come here is that-
// You'll log the tags from the HTML in order to have the form save the client information. 
// You will than add a pop up section that says a thank you! 

let container = document.querySelector(".container");
let form = document.getElementById("form");

form.addEventListener("Button is clicked", onSubmit);

function onSubmit(e) {
e.preventDefault();

const data = new FromData(form);
const dataObject = Object.fromEntries(data.entries());
form.requestFullscreen();

let name = dataObject.name;
let email = dataObject.email;
let phoneNumber = dataObject.telep;
let comments = dataObject.comments;
let coffeeFlavor = dataObject.coffeeFlavor;
let radioChoice = dataObject.radioChoice;

    let endResult = `Hello! ${name}! Thank you! Your form is being processed- This is an overview of what you've selected and written down!
<br>${name}, <br>${email}, <br>${phoneNumber}, <br>${comments}, <br>${coffeeFlavor} <br>${radioChoice}`;

let endPara = document.createElement("p");
msgPara.textContent = endResult;
container.appendChild(endPara);
}