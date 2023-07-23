// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then((json) => {
//          console.log(json.products);
//          return json.carts.map((el)=> el.products.filter((nesto) => nesto.total>= 555));
//      })

//     .then((data) => console.log(data));
// const fetchingData = async() => {
//     let nekiBr = prompt("unesite neki broj");
//     const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${nekiBr}/comments`);
//     const result = await data.json();
//     console.log(result);
    
//  }
// // fetchingData();
// // ? sluzi da odredimo osobinu neke baze & ovo stavimo da bi mu rekli sta da odradi
// //da bi prosledili argument moramo da napravimo da ga funk prihvati
// // & dodavanje nekog parametra kako bi se naslo ono sto trazomp queri params, 
// const fetchingData = async(comm) => {
    
//  // let nekiBr = prompt("unesite neki broj");
//     const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${comm}`);
//     const result = await data.json();
//     console.log(result);
    
// }
// fetchingData(15);

// const fetchingData = async(parm) => {
//     const da
// }

//klase

class User {
    ime;
    prezime;
    posao;
    pribivaliste = "Novi Pazar";
    kredit;
    constructor(name, lastname, job, credit, hobi) {
      this.ime = name;
      this.prezime = lastname;
      this.posao = job;
      this.kredit = credit;
      this.hobi = hobi;
    }
  }
  
  const jaAldin = new User("aldin", "halilovic", "coach", 0);
  
   console.log(jaAldin);
  //klase su jedan od osnovnih koncepata u objektno orjentisanom programiranju, ono predstavlja plan po kojem ce objekti biti napravljeni. klase imaju svoj konstrukto koji sluzi da da pocetne vrednosti nekom  objektu
  class Radijator {
    ime;
    prezime;
    mozak;
    skola;
  constructor(name, lastname, neotpakovan, medicinska){
    this.ime = name;
    this.prezime = lastname;
    this.mozak = neotpakovan;
    this.skola = medicinska;
  }
  }
  const jaRadijator = new Radijator("Emin", "Eminovic", 0, "Medicinska");
  console.log(jaRadijator);

//cetri nacina oop
//1.nasledjivanje je kada klase mogu da se nasledjuju, jedna klasa moze nasledjivati svojstva druge klase.extends
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    makeSound() {
      console.log("Animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    // Dodamo svojstvo 'breed' i metodu 'fetch' specificne za Dog klasu
    constructor(name, age, breed) {
      super(name, age); // Pozovemo konstruktor nadklase pomoću 'super'
      this.breed = breed;
    }
  
    makeSound() {
      console.log("Dog barks.");
    }
  
    fetch() {
      console.log("Dog fetches the ball.");
    }
  }
  
  const dog = new Dog("Buddy", 3, "Labrador");
  dog.makeSound();  // Output: "Dog barks."
  dog.fetch();      // Output: "Dog fetches the ball."
  console.log(dog.name); // Output: "Buddy"
  console.log(dog.age);  // Output: 3
  console.log(dog.breed); // Output: "Labrador"

// //2.apstrakcija
// //apstrakcija otkriva samo bitne aspekte svojih podataka i funkcionalnosti
class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Insufficient funds.");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }
//3.enkapsulacija
//sve vane informacije su sadrzane unutar objekta i da su izlozene samo odabrane
//4.polimorfizam omogucava da se ista metoda moze koristiti na razlicitim tipovima podataka ili objekta
//Callback funkcije: Callback funkcije su funkcije koje se prosleđuju kao argumenti drugim funkcijama i pozivaju se nakon završetka određenih asinhronih operacija. Na ovaj način, možemo definisati šta želimo da se izvrši nakon što se asinhrona operacija završi.

//Promises (Obećanja): Promises su zamjena za callback funkcije i pružaju elegantniji način za rukovanje asinhronim operacijama. Promises predstavljaju obećanje da će se asinhrona operacija završiti, i to može biti ispunjeno (resolve) sa rezultatom ili odbijeno (reject) sa greškom.

//async/await: Ovo je sintaktički šećer koji koristi Promises, omogućavajući nam da čitamo asinhroni kod kao da je sinhroni. Ključne riječi async i await koriste se za definisanje i rukovanje asinhronih funkcija.




//fecanje podataka
const fetchingData = async () => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    const result = await data.json();
    console.log(result);
    const filtered = await result.filter((el) => el.id % 2 === 0);
    console.log(filtered);
  
    return { result, filtered };
    // return {
    //  result: result,
    //  filtered: filtered,
    // };
  };
  fetchingData().then((el) => console.log(el));

  const fetchingData = async () => {
    const data = await fetch(
       " https://jsonplaceholder.typicode.com/posts"
    );
    const result = await data.json();
    console.log(result);
    const maped = await result.filter((el) => el.id % 2 === 0);
    console.log(maped);

    return{
        result, maped
    }
  }

  const fetchingMeda = asyns () => {
    const data = await fetch(

    );
    const result = await data.json();
    console.log(result);
    const filtered = await.filter((el) => el.id % 2 === 0);
    console.log(filtered);

  }
  const fetchData = () => {
    // let nekiTodo = prompt("Unesite broj od 0 do 200");
    // nekiTodo = 2;
    // fetch(`https://jsonplaceholder.typicode.com/todos/${nekiTodo}`)
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .catch((er) => console.log(er, "OVO JE ERORRRRRRRRRRRRRRRRRRRRRRRRRR"));
    
    class Animal {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    
      makeSound() {
        console.log("Animal makes a sound.");
      }
    }
    
    class Dog extends Animal {
      // Dodamo svojstvo 'breed' i metodu 'fetch' specificne za Dog klasu
      constructor(name, age, breed) {
        super(name, age); // Pozovemo konstruktor nadklase pomoću 'super'
        this.breed = breed;
      }
    
      makeSound() {
        console.log("Dog barks.");
      }
    
      fetch() {
        console.log("Dog fetches the ball.");
      }
    }
    
    const dog = new Dog("Buddy", 3, "Labrador");
    dog.makeSound();  // Output: "Dog barks."
    dog.fetch();      // Output: "Dog fetches the ball."
    console.log(dog.name); // Output: "Buddy"
    console.log(dog.age);  // Output: 3
    console.log(dog.breed); // Output: "Labrador"
    class BankAccount {
      constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
      }
    
      deposit(amount) {
        this.balance += amount;
      }
    
      withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
        } else {
          console.log("Insufficient funds.");
        }
      }
    
      getBalance() {
        return this.balance;
      }
    }

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
     const dog = new Dog("Buddy", 3, "Labrador");
    dog.makeSound();  // Output: "Dog barks."
    dog.fetch();      // Output: "Dog fetches the ball."
    console.log(dog.name); // Output: "Buddy"
    console.log(dog.age);  // Output: 3
    console.log(dog.breed); // Output: "Labrador"
    class BankAccount {
      constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
      }
    
      deposit(amount) {
        this.balance += amount;
      }
    
      withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
        } else {
          console.log("Insufficient funds.");
        }
      }
    
      getBalance() {
        return this.balance;
      }
    }

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


     const dog = new Dog("Buddy", 3, "Labrador");
    dog.makeSound();  // Output: "Dog barks."
    dog.fetch();      // Output: "Dog fetches the ball."
    console.log(dog.name); // Output: "Buddy"
    console.log(dog.age);  // Output: 3
    console.log(dog.breed); // Output: "Labrador"
    class BankAccount {
      constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
      }
    
      deposit(amount) {
        this.balance += amount;
      }
    
      withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
        } else {
          console.log("Insufficient funds.");
        }
      }
    
      getBalance() {
        return this.balance;
      }
    }

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


     const dog = new Dog("Buddy", 3, "Labrador");
    dog.makeSound();  // Output: "Dog barks."
    dog.fetch();      // Output: "Dog fetches the ball."
    console.log(dog.name); // Output: "Buddy"
    console.log(dog.age);  // Output: 3
    console.log(dog.breed); // Output: "Labrador"
    class BankAccount {
      constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
      }
    
      deposit(amount) {
        this.balance += amount;
      }
    
      withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
        } else {
          console.log("Insufficient funds.");
        }
      }
    
      getBalance() {
        return this.balance;
      }
    }

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