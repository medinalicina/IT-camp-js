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


