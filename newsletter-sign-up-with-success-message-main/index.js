// declare variables

let inputVal = document.getElementById("inputVal");
const subscribeBtn = document.getElementById("subBtn");

subscribeBtn.addEventListener("click", () => {
  console.log(inputVal.value);

  if (inputVal.value === "") {
    console.log("empty");
  } else {
    const forbiddenArray = [",", "-", ":", ";"];
    if (forbiddenArray.includes(inputVal.value)) {
      return relert("please input a valid email");
    }
  }
});

function relert(info) {
  alert(info);
}

// input value

// an array of unwanted characters to test if its correct
// error message
// sucess message

/* 
user inputs email  DONE
clicks subscribe button 
on subscribe button click email first checks if it is correct using regex mthds

{
    gets value of input,
    compare it with the function expressions tht you have

    if{ correct, succes modal}
    else{incorrect password shall show}
}
button changes to subscribed


*/

/*  for some reason, input no dey show
 */
