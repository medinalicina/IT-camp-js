//clousure hoisting ero function promises
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((json) => {
    console.log(json.products);
    return json.products.filter((el)=> el.stock >= 68);
})
.then((data) => console.log(data));
    
