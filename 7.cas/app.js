/*let niz =["medina" ,"mustafa" ,"tajra"]
console.log(niz);
niz.push("bilosta");

console.log(niz);
let Lastelement = niz.pop()
niz.unshift("prvi element")

console.log(niz);
niz.push("medina", "licina")
let firstThree = (1,3,5);
let secondThree = (2,4,6);
let combined = firstThree.concat[secondThree];
console.log(combined);
console.log(combinet.reverse());
/*slice vraca kopiju niza, splice sece niz*/

/*let randomItems = ["telefon", "ranac", "ajfon", "laptop", "coach"];
console.log(randomItems, randomItems.length);
let a = randomItems.slice(0,3);
a.push("nesto");
console.log(a);
a.pop();
console.log(a);

let a = randomItems.splice(3);
console.log(a);
console.log(randomItems)*/
//////////////////////////////////////////////////////////////////////////////////////////
/*let numbers = [1,3,5,7,9];
for (let i = 0; i < 10; i++){
    if(i %2 === 0 && i !==0){
        numbers.push(i);
    }
}
console.log(numbers);
console.log(numbers.reverse());*/
  

/*const prvaArrowFunction + () => console.log("nesto");
prvaArrowFunction();*/

const nekiNiz = [1,3,5,7,9];
const sumNumbers = (nekiNiz) => {
    let start = 0;
    for (let i = 0; i < nekiNiz.length; i++) {
       start += nekiNiz[i];
}
  return start;
};
console.log(sumNumbers(nekiNiz));
//////////////////////////////////////////////////////////////////////////////////////////////////////////



























