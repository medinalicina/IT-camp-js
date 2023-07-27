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
let paarniBrojevi = [];
for (let i = 0; i < niz.length; i++) {
  let paarniBrojevi = [];
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

osoba.ime;
osoba.prezime;

osoba.nekaOsobina[3];
osoba.vestine.js;
console.log(osoba.vestine.css);
//petlje, map i filter,8 falsy vrednosti  da se napravi metoda unutar objekta i fecanje podataka, da nam neki broj , var let i konst, razlika izmedju funkcije i metode, closure hoisting, razlika imedju === i ==  ; === uporedjuje i vr3ednost i tip podataka
U JavaScriptu postoje 6 falsy (lažnih) vrijednosti:

1. `false` - boolean vrijednost false
2. `null` - predstavlja odsustvo vrijednosti
3. `undefined` - kada varijabla nije definirana ili nema dodijeljenu vrijednost
4. `0` - numerička vrijednost nula
5. `-0` - negativna numerička vrijednost nula
6. `NaN` - "Not-a-Number", što označava nepostojeću ili nevažeću numeričku vrijednost
7. `""` - prazan string (niz karaktera)
8. `false` - numerička vrijednost nula

Važno je napomenuti da sve ostale vrijednosti u JavaScriptu se smatraju "truthy" (istinitim) vrijednostima, uključujući brojeve koji nisu nula, stringove s tekstom, objekte i nizove.




falsy predstavlja da je neka vrednost lazna ili netacna
null predtsavlja da varijabla nema vrednost
undefined predstavlja da neka varijabla nije definisana i da nema neku vrednost
`0` pred
nan oznacava nevazecu ili nepostojanu brojcanu vrednost
"" oznacava niz karaktera
false brojcana vrednost nule
map jeste metoda koja odvaja tj pravi od jednog niza novi niz koji sadrzi samo pojedine elemente
// map() metoda kreira novi niz (iste duzine) sa logikom predstavljenom unutar callback funkcije unutar date metode. 
// filter() metoda kreira novi niz sa onim elementima koji su prosli test. Novodobijeni niz moze imati maksimalno elemenata kao niz na koji se primenjuje metoda, takodje moze biti prazan niz. 
// reduce() metoda vraca jednu vrednost. Iteracija se vrsi kroz ceo niz. 
// map je mtoda koja kreira potpuno novi niz iste duzine, radi na osnovi logike koja je predstavljena nekom callback funkcijom, petlje, objekte i asih
// filter je metoda koja kreira novi niz sa onim elementom koji su prosli neki uslov. dobijeni niz filter metodom moze imati maksimalan broj elemenata kao i niz na koji se primenjuje neka metoda, moze biti i prazan niz
// reduce je metoda koja vraca neku vrednost a intracija prolazi kroz ceo niz           
// map jeste metoda koja kreira novi niy potpuno iste duyine.koji rqdi po yahtevu datom u nekoj callback funkciji unutar date metode
// Klase su šablon za kreiranje objekata. Oni inkapsuliraju podatke sa kodom za rad na tim podacima. Klase u JS-u su izgrađene na prototipovima, ali takođe imaju određenu sintaksu i semantiku koja je jedinstvena za klase.
// konstruktor jeste posebna metoda koja se poziva prilikom stvaranja nove klase
//let kada zelimo napraviti varijablu koju mozemo menjati a const varijablu koju ne mozemmo menjati, a varijable koje koriste var su vidljive na celom programu


function kojihVise(recenica) {
 let brojacMalih = 0;
 let brojacVelikih = 0;
 for (let i = 0; i < recenica.length; i++) {
   if (recenica[i] !== recenica[i].toUpperCase()) {
    brojacMalih++;
           } else if (recenica[i] !== recenica[i].toLowerCase()) {
             brojacVelikih++;
           }
         }
       }