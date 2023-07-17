// function kolikoMalih(recenica) {
//         let brojac = 0;
//        for (let i = 0; i < recenica.length; i++) {
//          if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
//            brojac++;
//          }
//         }
//       return brojac;
//      }
//      console.log(kolikoMalih("da li BROJI razmake"));
    
//      function kojihVise(recenica) {
//        let brojacMalih = 0;
//        let brojacVelikih = 0;
//        for (let i = 0; i < recenica.length; i++) {
//          if (recenica[i] !== recenica[i].toUpperCase()) {
//            brojacMalih++;
//          } else if (recenica[i] !== recenica[i].toLowerCase()) {
//            brojacVelikih++;
//          }
//        }
//      }
    
//      if (brojacMalih > brojacVelikih) {
//        return `malih ima ${brojacMalih} i njih je vise `;
//      } else if (brojacMalih < brojacVelikih) {
//        return `velikih ima ${brojacVelikih} i njih ima vise `;
//      } else {
//        return "u ovom stringu ima isti broj slova ";
//      }
//      console.log(kojihVise("SSaaa"));
    
//     //==========================================================================//
    
//     const toLower = (recenica) => {
//       let nova = "";
//       for (let i = 0; i < recenica.length; i++) {
//         nova += recenica[i].toLoweCase();
//       }
//       return nova;
//     };
    
//     const toLower2 = (recenica) => {
//       return recenica.toLoweCase();
//     };
    
    
    
//     let nekaMatrica = [ 
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9]
//     ];
//   console.log(nekaMatrica);
//   for (let i = 0; i < nekaMatrica.length; i++) {
//       for (let j = 0; j < nekaMatrica[i].length; j++) {
//         if(i + j === 2){ 
//         console.log();
//      }
//     }
//   }






// const nekiNiz = [1, 2, 3, 4, 5];
// nekiNiz.map((el)=> el + 3);
// const customMap  = (array, callbackFunkcija) => {
//   const nerArray = [];
//   for (let i = 0; i < array.length; i++)
// {
//   newArray.push(callbackFunkcija(array[i]));
// }
// return newArray;
// };


// function addTri () {
//   return el + 3;
// }
//  console.log(customMap(nekiNiz, addTri));

//  function smanji(broj) {
//   if (broj === 1) return;
//   broj--;
//   console.log(broj);
//   smanji(broj);
//  }

//  let nesto = 30;
//  smanji(nesto);

const niz = [
[4, 12, 100, 3],
[2, 5, 7, 9, 3],
[11, 53, 75, 87],
[3],
[4]
];
const paarniBrojevi = [];
for (let i = 0; i < niz.length; i++) {
  for(let j = 0; j < niz[i].length; j++){ 
  if (niz[i][j] % 2 === 0){
    paarniBrojevi.push(niz[i][j]); 
  }
}
}
console.log(paarniBrojevi);


const user = {
  ime: "Medina",
  prezime: "Licina",
  nekaOsobina: [1, 2, 4, "los"],
  vestine:{
    html: "prilicno dobro",
    css: "onako",
    js: "kriticno",
  },
};

osoba.name;
osoba.prezime;

osoba.nekaOsobina[3];
osoba.vestine.js;
console.log(osoba.vestine.css);
//petlje, map i filter,  da se napravi metoda unutar objekta i fecanje podataka, da nam neki broj , var let i konst, razlika izmedju funkcije i metode, closure hoisting, razlika imedju === i ==  ; === uporedjuje i vr3ednost i tip podataka