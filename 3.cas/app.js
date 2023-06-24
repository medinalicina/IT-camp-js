/*for(let i = 0; i , 100; i++ ){
    if(i % 3 === 0){
        console.log("fizzbuzz");
    }
    else if(i % 5 === 0){
        console.log("buzz");
    }
    else if( i % 3 === 0  && i % 5 === 0){
        console.log("fizz");
    }*/
    
//////////////////////////////////////////////////////////////////////////////////////////////////
/*let b=15;
if(b>7){
    console.log("b je vece od 7");
}else if(b>3){
    console.log("b je vece od 3 ali ne i od 7");
}else{
    console.log("b je manje od 3");
}*/

/*let b=10;
for(let i=0;i<10;i++){
    b+=2;
    console.log("b je",b);
}*/

/*let a=0
for(let i=0; i<3; i++){
    a+=+prompt("unesi broj:");
}
console.log(a);*/

/*c=5;
c>5? console.log("c je vece od 5") : console.log("c je 5 ili manje");*/

/*a=8;

switch(a){
    case 7:
        console.log("a je 7");
    case 3:
        console.log("a je 3");
    default:
        console.log("a nije ni 3 ni 7");
        break;
}*/
let a = 20;
let b = 5;
let stepen =  20 / 5;
console.log(20 / 5);
//  1.5  ** operator stepenovanja

let recenica = "Omare jesi li spremio test ?";
const duzina = recenica.length;
let novaRecenica = 0
let brojac = 0;
for (let i = 0; i < duzina; i++) {
  if (recenica[i] !== " ") {
    novaRecenica += recenica[i];
    brojac++;
  }
}
console.log(brojac);
let a = 15;
 console.log(a);
 a++;
 console.log(a);
 a--;
 console.log(a);
 a = a + 5;
 a += 5;
 console.log(a);

 let b = 10;

 for (let i = 0; i < 10; i++) {
   //   console.log("OVO JE PETLJA", i);
   console.log(b, "default");
   b += 2;
   console.log(b, "petlja");
   console.log(i);
 }




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