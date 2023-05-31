/*let a = 15;

function prva() {
    console.log(a);
}
function druga() {
    let a = 7;
    console.log(a);
}
function treca() {
    let a = 3;
    console.log(a);
}

// prva();
// druga();
// treca();*/

/*function createUser (userName, lastName) {
    return{
        name: userName,
        lastName: userLastName,
    };
}
const userMedina = createUser("medina", "licina");

//console.log(userMedina); //////////////////////////////classes////////////////*/

class Phone {
    ime;
    gb;
    model;
    constructor(name , memorija, dimenzija) {
        this.ime = name;
        this.gb = memorija;
        this.model = dimenzija;
    }
}
const telefon = new Phone("IPhone", 128, "14 pro max");
console.log(telefon);

// class User ()
const characters = {
    Michael: { 
      stats: { Health: 100, Stamina: 80 },
      ability: "Slow Motion" 
    },
    Franklin: { 
      stats: { Health: 90, Stamina: 95 },
      ability: "Slow Motion Driving" 
    },
    Trevor: { 
      stats: { Health: 80, Stamina: 70 },
      ability: "Rage Mode" 
    }
  };
  
  function displayStatus(character, property) {
    const characterInfo = characters[character];
    if (characterInfo) {
