const products = [{
    id: 1,
    name: "T-shirt",
    qty: 1,
    price_per_unit: 100,  
},
{
    id: 2,
    name: "Sneakers",
    qty: 2,
    price_per_unit: 300,
},
{
    id: 3,
    name: "Necklace",
    qty: 5,
    price_per_unit: 125,
},
];
const calcTotal = (arr) => {
  const productsWithTotal = arr.map(el => {
    return{
        id : el.id,
        name: el.name,
        qty: el.qty 
        price_per_unit: el.price_per_unit  
        total: el.qty * el.price_per_unit,
    }
  })

  const total = productsWithTotal.reduce((prevValue, currValue)=> {
    return pervValue + currValue.total;
  },0 );
   
  console.log(productsWithTotal)
  console.log(total)
   return total
}

console.log(calcTotal(products))

const nekiNiz = [1,3,5,7,9];
const sumNumbers = (nekiNiz) => {
    let start = 0;
    for (let i = 0; i < nekiNiz.length; i++) {
       start += nekiNiz[i];
}
  return start;
};
console.log(sumNumbers(nekiNiz));


let numbers = [1,3,5,7,9];
for (let i = 0; i < 10; i++){
    if(i %2 === 0 && i !==0){
        numbers.push(i);
    }
}
console.log(numbers);
console.log(numbers.reverse());


if (ucenik1godine > ucenik2godine && ucenik1godine > ucenik3godine) {
  if (ucenik2godine > ucenik3godine) {
    console.log(
      `${ucenik1} je stariji od ${ucenik2}, a ${ucenik2} je stariji od ${ucenik3}`
    );
  } else {
    console.log(
      `${ucenik1} je stariji od ${ucenik3}a, a ${ucenik3} je stariji od ${ucenik2}a`
    );
  }
}
