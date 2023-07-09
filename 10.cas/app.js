/*const nekiBrojevi = [7, 12, 1, 8, 19, 20, 15, 22, 25, 30, 2, 10, 63];

const pomnozenibrojevi = nekiBrojevi.map((el) => el * 3);
console.log(pomnozenibrojevi);

const parnibrojevi = pomnozenibrojevi.filter((el) => el % 2 === 0);
console.log(parnibrojevi);*/


/*let rec1 = "NEDELJA";
console.log(rec1[2]);
//toUpperCase() - metoda koja pretvara ceo string u velika slova
let NEDELJA = rec1.toUpperCase();
console.log("NEDELJA");
//toLowerCase() - metoda koja pretvara ceo string u mala sl
//////////////////////////////////////////////////////////////////////
const recenica0 =
  "zelimo datu recenicu PriKaZAti MALIM Isto tako I VElikim slovima";

const recc = recenica0.toLowerCase();

console.log(recenica0.toLowerCase());

/////////////////////////////////////////////////////////////////////////////////
//Ispisati recenicu gde svaka rec pocinje velikim slovom

 /*const recenica =
  "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa, nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it camp-a";

 let novaRecenica = "";
 for (let i = 0; i < recenica.length; i++) {
  if (i === 0) {
     novaRecenica += recenica[i].toUpperCase();
   } else if (recenica[i - 1 === " "]) {
     novaRecenica += recenica[i].toUpperCase();
 } else{
     novaRecenica += recenica[i];
 }
 }
 console.log(novaRecenica)*/

 //////////////////////////////////////////////////////////////////////////////////
 //const recenica =
 // "danas je veoma lep dan, pun obaveza";


 let novaRecenica = "";
for (let i = 0; i < recenica.length; i++) {
  if (i === recenica.length-1) {
    novaRecenica += recenica[i].toUpperCase();
  } else if (recenica[i + 1 === " "]) {
    novaRecenica += recenica[i].toUpperCase();
} else{
    novaRecenica += recenica[i];
}
}
console.log(novaRecenica)


//napravi funkciju koja broji slova u recenici.
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

const brojevi = [6, 5, 27, 28, 29, 31, 33, 15];

const neparniBrojevi = brojevi.filter((el) => el % 2 === 0);

// console.log(brojevi);
// console.log(neparniBrojevi);

// const neparniMapBrojevi = brojevi.map((el) => el % 2 !== 0);

// console.log(neparniMapBrojevi);

const biggerNums = brojevi.filter((el) => el > 16);

// console.log(biggerNums);

const ourCustomFilter = (niz, callbackFn) => {
  const noviFilterNiz = [];
  for (let i = 0; i < niz.length; i++) {
    if (callbackFn(niz[i])) {
      noviFilterNiz.push(niz[i]);
    }
  }
  return noviFilterNiz;
};

function customCallback(el) {
  return el > 10;
}

// console.log(ourCustomFilter(brojevi, customCallback));

const nekiBrojevi = [7, 12, 1, 8, 19, 20, 15, 22, 25, 30, 2, 10, 63];

const pomnozenibrojevi = nekiBrojevi.map((el) => el * 3);
console.log(pomnozenibrojevi);

const parnibrojevi = pomnozenibrojevi.filter((el) => el % 2 === 0);
console.log(parnibrojevi);
/////////////////////////////////////////////////////////////////////

const brojjevi= [2, 3, 5, 112, 223, 436, 67, 43, 19];
const parnibrojevi = brojjevi.filter(function(broj) {
    return broj %2 === 0;
});
console.log(parnibrojevi);
////vezbaaaaaaa

const nekereci =["medina", "ahmed", "selma", "dzezva", "cackalica"];
const filtriranereci = nekereci.filter(function(reci){
    return nekereci.length > 7;
});
console.log(filtriranereci);*/

/*const nekiBrojevi = [3, -4, 8 , 5, -11, -6];
const filtriranibrojevi = neki.nekiBrojevi.filter(function(nekiBrojevi){
    return nekiBrojevi.length > 0;
});
console.log(filtriranibrojevi);

/*const = [
  [12, 5, 8],
  [3, 5, 8],
  [16, 3, 7],
];
const dveMape = nekaKartica.map((niz) => niz.filter((el) => el % 2 === 0));
console.log(dveMape);*/

/*const nizZaReduce = [2, 8, 50, 10, 7, 155, 45, 68];
const zbirElemenata = nizZaReduce.reduce(
  (previolusValue, currentValue) => previolusValue + currentValue, 100 
  //ako stavimo sto onde ce ono da pocne od 100
);
console.log(zbirElemenata);*/

/*const nekiBrojevi = [1, 2, 3, 5, 6, 9];
 const vrednostElemenata = nekiBrojevi.reduce(
  (previolusValue, currentValue) => ((previolusValue + currentValue) )
 );
console.log(vrednostElemenata / nekiBrojevi.length);*/
///OBJEKTI//////////////////////////////////////////////////////////////objekti sastoji se od key i svaki kljuc mora da bude ... a objekti ne moraju
const ourfirst = {
  car: "Alfa Romeo", 
  vozac: "Neko Nebitan",
  suvozac: "Redzi (pod kaznom)",
 godina: 18,
};
console.log(ourfirst);
console.log(ourfirst.vozac);
//map, filter, reduce
//[{},{},{},{}] niz objekata

/*Objekti imaju mnoge metode koje se mogu koristiti za manipulaciju svojstvima. Na primjer:

Object.keys(objekt) vraća polje svih naziva svojstava objekta.
Object.values(objekt) vraća polje svih vrijednosti svojstava objekta.
Object.entries(objekt) vraća polje svojstava objekta kao parova [key, value].
objekt.hasOwnProperty(nazivSvojstva) vraća true ako objekt ima svojstvo s nazivom nazivSvojstva*/

