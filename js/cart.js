let cartform = document.getElementById("cartForm");
let cartMessage = document.querySelector(".cartMessage");

cartform.addEventListener("submit", onLogin);

function onLogin(e) {
    e.preventDefault();

  const data = new FormData(cartform);
  const dataObject = Object.fromEntries(data.entries());
console.log(dataObject);

 cartform.reset()

 let userLoginName = dataObject.loginName; 
 let userLoginEmail = dataObject.loginEamil;
 let userLoginPass = dataObject.loginPass;

 let loginPage = `Welcome, ${userLoginName}! You're logged in!`;

 let welcomePage = document.createElement("p");
 welcomePage.textContent = loginPage;
 cartMessage.appendChild(welcomePage);
 console.log("login page", loginPage);
}