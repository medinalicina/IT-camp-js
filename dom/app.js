const inputText = document.getElementById("inputText");
const addButon = document.getElementById("addButon");

let vrednost = "";

console.log(inputText);
inputText.addEventListener("input", (e) => {
  vrednost = e.target.value;
});

addButon.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(vrednost);
  inputText.value = "";
});
