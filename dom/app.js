
const inputText = document.getElementById("inputText");
const addButon = document.getElementById("addButon");
const inputContainer = document.getElementById("inputContainer");
const tasks = document.getElementById("tasks");

let vrednost = "";

console.log(tasks.children);

function singleCard(text) {
  const kartica = document.createElement("div");
  kartica.classList.add("task");

  const hatri = document.createElement("h3");
  hatri.innerText = text;

  const checkInput = document.createElement("input");
  checkInput.type = "checkbox";

  checkInput.addEventListener("change", () => {
    console.log("promenjeno");
    // const veciDiv = checkInput.
  });

  kartica.appendChild(hatri);
  kartica.appendChild(checkInput);

  return kartica;
}

console.log(inputText);
console.log(inputContainer);
inputText.addEventListener("input", (e) => {
  vrednost = e.target.value;
});

addButon.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(vrednost);
  inputText.value = "";
  // console.log(tasks.children);

  tasks.appendChild(singleCard(vrednost));
});