///////////////////prptotip//////////////////

// class Bus{
//     seats;
//     color;

//  constructor(sedista, boja){
//     this.color = boja;
//     this.seats = sedista;
//  }

//  helloBus(){
//     console.log("caooooooooooo");
//  }
//  changeColor(newColor){
//     this.color = newColor;
//  }
//  getColor(){
//     return this.color;
//  }
// }

// const lasta= new Bus(55, "zelena");

// console.log(lasta);
// lasta.helooBus()
// lasta.changeColor("zuta");
// console.log(lasta);

// const bojaBusa = lasta.getColor();
// console.log(bojasedista);
//nasledjivanje 
class Pet{
    legNum;
    tail;

     constructor(noge, rep){
        this.legNum = noge;
        this.tail = rep;
     }
}
class Cat extends Pet {
    name;
    color;

    constructor(noge, rep, ime, boja){
        super(noge, rep);
        this.name = ime;
        this.color = boja;
    }
}









class Pet {
    legNum;
    tail;
  
    constructor(noge, rep) {
      this.legNum = noge;
      this.tail = rep;
    }
  }
  
  class Cat extends Pet {
    name;
    color;
  
    constructor(noge, rep, ime, boja) {
      super(noge, rep);
      this.name = ime;
      this.color = boja;
    }
  }
  
  class Dog extends Cat {
    constructor(noge, rep, ime, boja) {
      super(noge, rep, ime, boja);
    }
  
    bark() {
      console.log("arrrr!!!");
    }
  
    getTail() {
      return this.tail;
    }
  }
  
  const ourCat = new Cat(4, "yes", "Sladjan", "Bela");
  
  const ourDog = new Dog(4, "yes", "Sladjana", "grey");
  
  console.log(ourCat);
  
  console.log(ourDog);
  
  ourDog.bark();

