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






const nekiNiz = [1, 2, 3, 4, 5];
nekiNiz.map((el)=> el + 3);
const customMap  = (array, callbackFunkcija) => {
  const nerArray = [];
  for (let i = 0; i < array.length; i++)
{
  newArray.push(callbackFunkcija(array[i]));
}
return newArray;
};


function addTri () {
  return el + 3;
}
 console.log(customMap(nekiNiz, addTri));

 function smanji(broj) {
  if (broj === 1) return;
  broj--;
  console.log(broj);
  smanji(broj);
 }

 let nesto = 30;
 smanji(nesto);

const niz = [
[4, 12, 100, 3],
[2, 5, 7, 9, 3],
[11, 53, 75, 87],
[3],
[4]
];
for (let i = 0; i < niz.length; i++) {
  const noviNiz = [];
  if (niz[i] % 2 === 0){
    noviNiz.push(niz[i]); 
  }
}
console.log();