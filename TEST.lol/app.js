//1. uneti broj treba kvadrirati i ispisati u konzoli, broj se unosi preko promt-a
//2. FIZZ BUZZ 1-100 ukoliko je deljiv sa 3 onda ispisuje FIZZ a ukoliko je deljiv sa 5 ispisuje BUZZ ukoliko je sa oba onda fizzbuzz u ostalim slucajevima samo broj
//3. fetch

//1.
let a=+prompt("unesite neki broj")
if (isNaN(a)) {
    console.log("Uneta vrednost mora biti broj")
} else {
    console.log(a*a)
}

//2.
for (i=1; i<=100; i++) {
        if (i % 3 ===0 && i % 5 === 0) {
           console.log("FIZZ BUZZ")}
      else if (i % 3 === 0) {
           console.log("FIZZ")
       } else if (i % 5 === 0) {
           console.log("BUZZ")
       } 
       else console.log(i)
    }

//3.
const fetchData = () =>{  fetch('https://dummyjson.com/products').then((rezultat) => rezultat.json())
.then((data) => {
    console.log(data.products);
    return data.products.filter((el)=> el.stock >= 73);
})
.then((data) => {
    return data.filter((el) => el.rating >= 4.3);
    
})
.then(console.log);

}
fetchData();
