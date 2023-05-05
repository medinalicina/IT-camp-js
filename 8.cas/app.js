//call back funkcije je funkcija koju prosledjujemo nekoj drugoj funkciji
//function sayHello(hello){
 //   console.log()
/*function sabiranje(a, b){
    return(a + b);
}

function anotherFunction(someFun){
    let a = 5;
    let b = 3;
    return someFun (a, b);     
}
console.log(anotherFunction(sabiranje))*/

/*let someArray = [3, 5, 123, 435, 513, 121, 12];

let helperFunction = (a) => a + 10;

function customFunction(niz, callbackFunction){
    let pomocniNiz = [];
for (let i = 0; i < niz.length; i++){
    pomocniNiz.push(callbackFunction(niz[i]));
}
return pomocniNiz;
}
console.log(someArray);
console.log(customFunction(someArray, helperFunction));*/




///////////////////////////////////////////////////////////


/*const nekiNiz = [5, 6, 2, 17, 19, 122, 50]
const prvaMap = nekiNiz.map((el) => el * el +10 )
console.log(nekiNiz);
console.log(prvaMap);*/


/*const someAges = [2, 8, 11, 15, 13, 19]
const prvaMap = someAges.map((el) => el * 7)
console.log(someAges);
console.log(prvaMap);*/

/*const someKms = [20, 15, 25, 33, 70, 50]
const prvaMap = someKms.map((el) => el * 1.6)
console.log(someKms);
console.log(prvaMap);*/


/*const opetBrojevi = [6, 10, 22, 6, 1, 10, 33, 52];
const prvaMap = opetBrojevi.map( el => {
    if(el %2 === 0){
    return(el*2);
    }
    else {
        return(el*3);
    }
}
)*/

/*const opetBrojevi = [6, 10, 22, 6, 1, 10, 33, 52];
const proizvodMap = opetBrojevi.map((el) => (el % 2 === 0 ? el * 2 : el *3)); /*ovo je kraci nacin primera gore*/


const Matrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const prvaMap = Matrica.map((manjiNiz) =>  console.log(manjiNiz) 
manjiNiz.map((el) =>));



const nekiBrojevi = [7, 12, 1, 8, 19, 20, 15, 22, 25, 30, 2, 10, 63];

const pomnozenibrojevi = nekiBrojevi.map((el) => el * 3);
console.log(pomnozenibrojevi);

const parnibrojevi = pomnozenibrojevi.filter((el) => el % 2 === 0);
console.log(parnibrojevi);
