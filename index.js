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
      successNotificationMessage;
    } else {
      return errorMessage("Valid email required");
    }
  }
});

/* 
 step 1: change

*/
function errorMessage(info) {
  // alert(info);
  // htmlMessageViewer.style.display = "block";
  htmlMessageViewer.textContent = `${info}`;
  setTimeout(() => {
    htmlMessageViewer.style.border = "2px solid red";
  }, 3500);

  /* 
  
  show in a popup box if it is good
  
  
  */
}

const successNotificationMessage = () => {
  /*
    hide  email signup page
    display => block    
    */
};

/*  for some reason, input no dey show  . Edit . just found out that alert accepts only one argument and basicaly discards the reamining
 */
