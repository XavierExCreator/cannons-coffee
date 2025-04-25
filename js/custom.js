// here in the custon js Selection,
// we'll be adding the functionality of a form!
// What you'll do when you come here is that-
// You'll log the tags from the HTML in order to have the form save the client information.
// You will than add a pop up section that says a thank you!

// let container = document.querySelector(".container");
let form = document.getElementById("form");
let thankUMessage = document.querySelector(".thankUMessage");

form.addEventListener("submit", onSubmit);
//The first part in add event listener needs to be the 'action' thats the event listener is listening for
//The second part is what it should do when ti does hear that action.

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObject = Object.fromEntries(data.entries());
console.log(dataObject);

  form.reset()

  let username = dataObject.name;
  let useremail = dataObject.email;
  let userphoneNumber = dataObject.telep;
  let usercomments = dataObject.comments;
  let usercoffeeFlavor = dataObject.coffeeFlavor;
  let userradioChoice = dataObject.radioChoice;

  let endResult = `Hello ${username}! Thank you for your submission! Your form is being processed- 
  This is an overview of what you've selected and written down!
your name:${username}, your email: ${useremail}, your telephone: ${userphoneNumber}, you commented: ${usercomments}, your favoite coffee flavor: ${usercoffeeFlavor} and lastly you're seeking: ${userradioChoice}`;

  let endPara = document.createElement("p");
  endPara.textContent = endResult;
  thankUMessage.appendChild(endPara);
  console.log("End message", endResult);
}
