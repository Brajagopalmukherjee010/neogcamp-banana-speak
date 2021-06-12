var btnTranslator = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
btnTranslator.addEventListener("click", function clickEventhandler() {
  console.log("clicked");
  console.log(txtInput);
  console.log("input", txtInput.value);
});
 