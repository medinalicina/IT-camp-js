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

