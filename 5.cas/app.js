/*function sqrNum(number1){
    return number1 * number1
    let square = number1 * number1;
    return square;
}
const nekaFunkcija = function (){
    console.log("ovo je neki namles function")
}
//nekaFunkcija()
const celzijusufahrenheit = function(broj){
    return broj * 1.8 + 32
};
console.log(celzijusufahrenheit)
const fahrenheitucelzijuse = function(broj){
    return ((broj - 32)*5 /9;
}
celzijusufahrenheit()*/
///NIZOVI////////////////////////////////////////////////////////////////////////////////////////
//let cars = ("BMW", 'MERCEDES' , "AUDI" , "VW"); /*INDEX SVAKOG BROJA POCINJE OD 0 PA NADALJE*/
//console.log(cars(3));
//console.log(cars[4]);

/*for(let i = 0; i < cars.length; i++){
    console.log(cars [i], i); 
    if(i %2 ===0){
        console.log(cars[i], i)
    }  
}//koristimo brojac petlje
for (let i = cars.length -1; i >= 0; i--) {
    console.log(cars[i]);
}
// Nizovi (Arrays) - neprimitivni tip podatka koji sluzi za skladistenje vise vrednosti
//U javascripyu niz moze sadrzati elemente razlicitog tipa.*/
/*let niz = [];

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    niz.push(i);
  }
}
console.log(niz);
/*let predmeti = ["25", "60", "15", "20", "39"];
for (let i = 0; i < predmeti.length; i++) {
 //console.log(predmeti[i], i);
  if (i % 3 === 0) {
    console.log(predmeti[i], i);
  }
}*/
/*let predmeti = [25, 60, 15, 20, 39];
for (let i = 0; i < predmeti.length; i++) {
  if (predmeti[i] % 3 === 0) {
    console.log(predmeti[i]);
  }
}
for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }*/

/*for (let i = 0; i <= 100; i++){
    if(i %5 === 0){
        console.log(i);
    }
}*/

/*let brojevi = [10, 20, 30, 40, 50];
let suma = 0;
for (let i = 0; i < brojevi.length; i++) {
  suma += brojevi[i];
}
let prosek = suma / brojevi.length;
console.log("Prosek je" + prosek)*/

/*for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
      console.log(i, j);
    }
}*/

let nizNizova = [
    [1, 2, 3, 4],
    ["a", "b", "c", "d"],
    ["medina", "licina", "medina", "licina"],
    ["x", "y", "z", "w"]
  ];
  
  for(let i = 0; i < nizNizova.length; i++){
    console.log(nizNizova[i]);
  }
  //////////////////////////////////////////////////////////////////////////////

 /*let bilosta = ["matematika", "biologija", "fizika","hemija"]
  for(let i = bilosta.length; i >= 0; i--){
    console.log(bilosta[i]);
  }*/
  /*push() je metoda koja se koristi za dodavanje novog elementa na kraj niza u JavaScriptu.*/

  /*let a = [1,2,3];
  let b = [7,8,9];
  let c = a.contact(b);
     for(let i = 0;)
  console.log(a.contact(b))*/


  function sqrNum(number1){
    return number1 * number1
    let square = number1 * number1;
    return square;
}
const nekaFunkcija = function (){
    console.log("ovo je neki namles function")
}
//nekaFunkcija()
const celzijusufahrenheit = function(broj){
    return broj * 1.8 + 32
};
console.log(celzijusufahrenheit)
const fahrenheitucelzijuse = function(broj){
    return ((broj - 32)*5 /9;
}
celzijusufahrenheit()

function countElements(arr) {
  function countElements(array) {
    var result = {
      string: 0,
      number: 0,
      boolean: 0,
      array: 0,
    };
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === "string") {
        result.string++;
      }
      if (typeof arr[i] === "number") {
      if (typeof array[i] === "number") {
        result.number++;
      }
      if (typeof arr[i] === "boolean") {
      if (typeof array[i] === "boolean") {
        result.boolean++;
      }
      if (Array.isArray(arr[i])) {
      if (Array.isArray(array[i])) {
        result.array++;
      }
    }
   65 changes: 65 additions & 0 deletions65  
  JavaScript/31.cas/app.js
  @@ -0,0 +1,65 @@
  // unshift() - metoda dodaje na pozcetku niza jedan ili vise elemenata.
  // unshift() prikazuje novu duzinu niza
  
  const niz = ["cetvrtak", "petak", "subota"];
  niz.unshift("sreda");
  
  console.log(niz);
  
  console.log(niz.unshift("ponedeljeak", "utorak"));
  console.log(niz);
  
  // shift() - metoda brise prvi element niza i svim ostalim elemenima smanjuje index za 1
  // shift() - metoda vraca izbrisani element. Kao kod pop() metode
  
  console.log(niz.shift());
  console.log(niz);
  
  // delete  keyword za brisanje odredjenog elementa unutar niza:
  // preko delette keyword mozemo izbrisati bilo koji  element iz niza ali na taj nacin ostavljamo rupe u nizu(undefined vrednosti)
  console.log(niz.length);
  
  delete niz[4];
  console.log(niz);
  
  // concat() - metoda se koristi za spajanje nizova s im sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz
  // concat() -meoda pravi novi niz
  
  const muskarci = ["mitar", "tarik", "dzenan"];
  const devojke = ["miona", "merisa", "hatidza"];
  const grupa = muskarci.concat(devojke, "mehmed", "omar");
  console.log(grupa);
  //===============================================================================//
  
  function splitArray(inputArray) {
    const firstArray = inputArray.slice(0, 3);
  
    const secondArray = inputArray.slice(3, -1);
  
    secondArray.pop();
  
    return [firstArray, secondArray];
  }
  
  const inputArray = grupa;
  const [firstArray, secondArray] = splitArray(inputArray);
  console.log(firstArray);
  console.log(secondArray);
  
  //==============================================================================//
  const podeliNiz = (niz) => {
    const muskarci = [];
    const devojke = [];
    for (let osoba of niz) {
      if (osoba === "omar") {
        continue;
      } else if (osoba[osoba.length - 1] === "a") {
        devojke.push(osoba);
      } else {
        muskarci.push(osoba);
      }
    }
    return `Muskarci su ${muskarci} a devojke su ${devojke}`;
  };
  console.log(podeliNiz(grupa));
  //===============================================
  const niz = ["cetvrtak", "petak", "subota"];
niz.unshift("sreda");

console.log(niz);

console.log(niz.unshift("ponedeljeak", "utorak"));
console.log(niz);

// shift() - metoda brise prvi element niza i svim ostalim elemenima smanjuje index za 1
// shift() - metoda vraca izbrisani element. Kao kod pop() metode

console.log(niz.shift());
console.log(niz);

// delete  keyword za brisanje odredjenog elementa unutar niza:
// preko delette keyword mozemo izbrisati bilo koji  element iz niza ali na taj nacin ostavljamo rupe u nizu(undefined vrednosti)
console.log(niz.length);

delete niz[4];
console.log(niz);

// concat() - metoda se koristi za spajanje nizova s im sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz
// concat() -meoda pravi novi niz

const muskarci = ["mitar", "tarik", "dzenan"];
const devojke = ["miona", "merisa", "hatidza"];
const grupa = muskarci.concat(devojke, "mehmed", "omar");
console.log(grupa);
//===============================================================================//

function splitArray(inputArray) {
  const firstArray = inputArray.slice(0, 3);

  const secondArray = inputArray.slice(3, -1);

  secondArray.pop();

  return [firstArray, secondArray];
}

const inputArray = grupa;
const [firstArray, secondArray] = splitArray(inputArray);
console.log(firstArray);
console.log(secondArray);

//==============================================================================//
const podeliNiz = (niz) => {
  const muskarci = [];
  const devojke = [];
  for (let osoba of niz) {
    if (osoba === "omar") {
      continue;
    } else if (osoba[osoba.length - 1] === "a") {
      devojke.push(osoba);
    } else {
      muskarci.push(osoba);
    }
  }
  return `Muskarci su ${muskarci} a devojke su ${devojke}`;
};
console.log(podeliNiz(grupa));
//===============================================================================//









  
