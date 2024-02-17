// declare variables
let inputVal = document.getElementById("inputVal");
const subscribeBtn = document.getElementById("subBtn");
const mainBdy = document.getElementById("main-bdy");
const successMessage = document.getElementById("successMessage");
const htmlMessageViewer = document.getElementById("email-message");

subscribeBtn.addEventListener("click", () => {
  let emailVal = inputVal.value;

  if (emailVal === "") {
    errorMessage("Please provide your email address");
  } else {
    const forbiddenArray = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (forbiddenArray.test(emailVal)) {
      successNotificationMessage("Validation successful");
      showSubscribeClip();
    } else {
      return errorMessage("Valid email required");
    }
  }
});

const showSubscribeClip = () => {
  mainBdy.style.display = "none";
  successMessage.style.display = "block";
};
function errorMessage(info) {
  htmlMessageViewer.innerHTML = `<p class="red">${info}</p>`;
  inputVal.style.border = "1px solid hsl(4, 100%, 67%)";
  inputVal.style.backgroundColor = "pink";
}

const successNotificationMessage = (message) => {
  htmlMessageViewer.innerHTML = `<p class="green">${message}</p>`;
  inputVal.style.border = "1px solid green";
  inputVal.style.backgroundColor = " rgb(182, 252, 182)";
};

/*  for some reason, input isn't showing  . Edit . just found out that alert accepts only one argument and basicaly discards the reamining
 */

const dismissBtn = () => {
  mainBdy.style.display = "block";
  successMessage.style.display = "none";
};
