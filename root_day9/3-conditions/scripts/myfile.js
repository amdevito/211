//init the vars

let name = document.querySelector("#myText").value;
const displaymsg = document.querySelector("#display");
const checker = document.querySelector("#check");

checker.onclick = function () {
  myPassFunction();
};

function myPassFunction() {
  name = document.querySelector("#myText").value;
  if (name === "Alana") {
    displaymsg.textContent = "Welcome " + name;
  }
}
