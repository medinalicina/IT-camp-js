fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then((json) => {
         console.log(json.products);
         return json.carts.map((el)=> el.products.filter((nesto) => nesto.total>= 555));
     })

    .then((data) => console.log(data));
const fetchingData = async() => {
    let nekiBr = prompt("unesite neki broj");
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${nekiBr}/comments`);
    const result = await data.json();
    console.log(result);
    
 }
// fetchingData();
//da bi prosledili argument moramo da napravimo da ga funk prihvati
// & dodavanje nekog parametra kako bi se naslo ono sto trazomp queri params, 
const fetchingData = async(comm) => {
    
 // let nekiBr = prompt("unesite neki broj");
    const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${comm}`);
    const result = await data.json();
    console.log(result);
    
}
fetchingData(15);


