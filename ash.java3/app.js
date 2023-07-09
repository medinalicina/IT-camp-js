//clousure hoisting ero function promises
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then((json) => {
//     console.log(json.products);
//     return json.products.filter((el)=> el.stock >= 68);
// })
// .then((data) => console.log(data));
    
// fetch('https://dummyjson.com/carts')
// .then(res => res.json())
// .then((json) => {
//          console.log(json.products);
//          return json.carts.map((el)=> el.products.filter((nesto) => nesto.total>= 555));
//      })

//     .then((data) => console.log(data));



// da pristupa i pamti vrednosti van svojih sopstvenih okvira (scopjivima i parametrima koji su bili dostupni u trenutku njenog kreiran

// function
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ASINHRONA JAVASCRIPT

function first() {
  second();
  console.log("prva funkcija");
}

function second() {
  third();
  console.log("druga funkcija");
}

function third() {
  console.log("treca funkcija");
  console.log("kraj");
}

first();

console.log(1);

setTimeout(() => {
  console.log(10);
}, 501);

console.log(15);

setTimeout(() => {
  console.log(20);
}, 200);

console.log(25);

setTimeout(() => {
  console.log(30);
}, 200);

console.log(35);

setTimeout(() => {
  console.log(40);
}, 201);

console.log(45);

function prva() {
  console.log("prva");
  treca();
}

function druga() {
  setTimeout(() => {
    console.log("druga");
  }, 300);
  prva();
}

function treca() {
  console.log("treca");
}

druga();

const prviPromis = new Promise((res, rej) => {
  let age = prompt("Unesite broj godina");
  setTimeout(() => {
    if (+age >= 18) {
      res(+age);
    } else {
      rej(+age);
    }
    // res("foo");
    // rej("greskaa");
  }, 1000);
});

prviPromis
  // .then((el) => el + 15)
  .then((data) => {
    console.log(`Osoba je punoletna vec ${data - 18} godina`);
  })
  // .catch((el) => console.log(el))
  .catch((data) => console.log(`Osoba je punoletna za ${18 - data} godina`))
  .finally(() => console.log("Izvrsili smo validaciju godina"));

function prva() {
  console.log("prva");
  treca();
}

function druga() {
  setInterval(() => {
    console.log("druga");
  }, 300);
  prva();
}

function treca() {
  console.log("treca");
}

druga();

const prviPromis = new Promise((res, rej) => {
  let age = prompt("Unesite broj godina");
  setTimeout(() => {
    if (+age >= 18) {
      res(+age);
    } else {
      rej(+age, "NIJE PUNOLENTA OSOBA");
    }
    // res("foo");
    // rej("greskaa");
  }, 1000);
});

prviPromis
  .then((data) => {
    console.log(`Osoba je punoletna vec ${data - 18} godina`);
    // console.log(data);
  })
.catch((err) => console.log(err))
.catch((data) => console.log(`Osoba je punoletna za ${18 - data} godina`))
.finally(() => console.log("Izvrsili smo validaciju godina"));

const fetchData = () => {
    let nekiTodo = prompt("Unesite broj od 0 do 200");
    // nekiTodo = 2;
    fetch(`https://jsonplaceholder.typicode.com/todos/${nekiTodo}`)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((er) => console.log(er, "OVO JE ERORRRRRRRRRRRRRRRRRRRRRRRRRR"));
  
     .then((json) => {
      console.log(json);
      return json.filter((el) => el.id % 2 === 0);
    })
    .then((filteredArray) => {
      console.log(filteredArray);
      return filteredArray.filter((el) => el.completed);
    })
    .then((completedTodos) => console.log(completedTodos));
  };
  
   fetchData();