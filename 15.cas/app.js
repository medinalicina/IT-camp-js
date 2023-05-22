
    const ourDeleteFunction = (id, id2) =>
    allUsers.filter((user) => user.id !== id && user.id !== id2);
  
  console.log(ourDeleteFunction(2, 3));
  // console.log(ourDeleteFunction(3));
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const obnovaObjekta = {
    name: "Aldin",
    course: "js",
  };
  
  const noviObjekat = {
    name: "Medina",
    course: "Medicinska ",
  };
  
  obnovaObjekta.name;
  obnovaObjekta["course"];
  
  obnovaObjekta.prezime = "halilovic";
  
  function callFunkcija(argumentNeki) {
    console.log(this.name, argumentNeki, "ovo je call funkcija");
  }
  
  // callFunkcija.call(obnovaObjekta, ["isto neki argument"]);
  // callFunkcija.call(noviObjekat, "drugi argument");
  
  // callFunkcija.apply(obnovaObjekta, [
  //   "asndjlsakdj",
  //   "alskdjklsjdklsa",
  //   "a;skdjslkdjs",
  // ]);
  
  const bindFunkcijaObnavljanje = callFunkcija.bind(obnovaObjekta, "nesto");
  
  // bindFunkcijaObnavljanje();
  
  const objectPractice = {
    voda: "Maxi",
    laptop: "Acer",
    telefon: "iphone",
  };
  
  const kljucevi = Object.keys(objectPractice);
  
  // console.log(kljucevi);
  
  const vrednosit = Object.values(objectPractice);
  // console.log(vrednosit);
  
  // Object.freeze(objectPractice);
  Object.seal(objectPractice);
  
  // console.log(objectPractice);
  
  objectPractice.voda = "rosa";
  
  // console.log(objectPractice);
  
  // const functionInObject = {
  //   name: "aldin",
  //   voda: "Maxi",
  //   laptop: "Acer",
  //   telefon: "iphone",
  //   // sayHello() {
  //   //   console.log("Hello world");
  //   // },
  //   helloName() {
  //     console.log(`Hello ${this.name}`);
  //   },
  // };
  
  // functionInObject.sayHello();
  // functionInObject.helloName();
  
  // console.log(this);
  
  ///////////////////////////////////CLOSURE//////////////////////////////////////////////////////////////
  
  let a = 10;
  
  function firstA() {
    let b = 5;
    console.log(b);
  }
  function secondA() {
    let b = 3;
    console.log(b);
  }
  
  function lastA() {
    console.log(a);
  }
  
  firstA();
  secondA();
  lastA();