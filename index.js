// declare variables

let inputVal = document.getElementById("inputVal");
const subscribeBtn = document.getElementById("subBtn");
const successMessage = document.getElementById("successMessage");
const htmlMessageViewer = document.getElementById("email-message");

subscribeBtn.addEventListener("click", () => {
  // alert(inputVal.value);
  let emailVal = inputVal.value;
  // alert(emailVal);
  if (emailVal === "") {
    errorMessage("Please provide your email address");
  } else {
    const forbiddenArray = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (forbiddenArray.test(emailVal)) {
      successNotificationMessage("Validation successful");
    } else {
      return errorMessage("Valid email required");
    }
  }
});

/* 
 step 1: change

*/
function errorMessage(info) {
  htmlMessageViewer.innerHTML = `<p class="red">${info}</p>`;
  inputVal.style.border = "1px solid hsl(4, 100%, 67%)";
  inputVal.style.backgroundColor = "pink";
  // setTimeout(() => {
  //   inputVal.style.border = "1px solid black";
  //   inputVal.style.backgroundColor = "inherit";
  // }, 1500);

  /* 
  
  show in a popup box if it is good
  
  
  */
}

const successNotificationMessage = (message) => {
  /*
    hide  email signup page
    display => block    
    */
  htmlMessageViewer.innerHTML = `<p class="green">${message}</p>`;
  inputVal.style.border = "1px solid green";
  inputVal.style.backgroundColor = " rgb(182, 252, 182)";
};

/*  for some reason, input no dey show  . Edit . just found out that alert accepts only one argument and basicaly discards the reamining
 */
