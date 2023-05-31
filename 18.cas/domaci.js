/*const karakteri {
    constructor(name, age, zanimanje) {
      this.name = name;
      this.age = age;
      this.zanimanje = zanimanje;
    }
  
    novaklasa() {
      return `Name: ${this.name}, 
      Age: ${this.age}, 
      zanimanje: ${this.zanimanje}`;
    }
  }
  
  const Michael extends karakteri {
    constructor(age) {
      super("Michael", age, "Retired Bank Robber");
    }
  
    specijalnesposobnosti() {
      return "Slow Motion";
    }
  }
  
  const Franklin extends karakteri {
    constructor(age) {
      super("Franklin", age, "Professional Driver");
    }
  
    specijalnesposobnosti() {
      return "Driving Skills";
    }
  }
  
  const Trevor extends karakteri {
    constructor(age) {
      super("Trevor", age, "Crazy Criminal");
    }
  
    specijalnesposobnosti() {
      return "Rage Mode";
    }
  }
  
  // godine ovih hadaljeva
  const michael = new Michael(45);
  const franklin = new Franklin(28);
  const trevor = new Trevor(42);
  
  //  informacije o likovima
  console.log(michael.novaklasa());
  console.log(franklin.novaklasa());
  console.log(trevor.novaklasa());
  
  // specijalne sposobnosti likova (demek)
  console.log(michael.specijalnesposobnosti());
  console.log(franklin.specijalnesposobnosti());
  console.log(trevor.specijalnesposobnosti());
  ////////////////////////////////////////////////////////////////////////////////////////////
  class Karakteri {
    constructor(name, age, zanimanje) {
      this.name = name;
      this.age = age;
      this.zanimanje = zanimanje;
    }
  
    novaKlasa() {
      return `Name: ${this.name}, Age: ${this.age}, Zanimanje: ${this.zanimanje}`;
    }
  }
  
  class Michael extends Karakteri {
    constructor(age) {
      super("Michael", age, "Retired Bank Robber");
    }
  
    specijalneSposobnosti() {
      return "Slow Motion";
    }
  }
  
  class Franklin extends Karakteri {
    constructor(age) {
      super("Franklin", age, "Professional Driver");
    }
  
    specijalneSposobnosti() {
      return "Driving Skills";
    }
  }
  
  class Trevor extends Karakteri {
    constructor(age) {
      super("Trevor", age, "Crazy Criminal");
    }
  
    specijalneSposobnosti() {
      return "Rage Mode";
    }
  }
  
//   // Godine ovih likova
//   const Michael = new Michael(45);
//   const Franklin = new Franklin(28);
//   const Frevor = new Trevor(42);
  
  // Informacije o likovima
  console.log(Michael.novaKlasa());
  console.log(Franklin.novaKlasa());
  console.log(Trevor.novaKlasa());
  
  // Specijalne sposobnosti likova
  console.log(Michael.specijalneSposobnosti());
  console.log(Franklin.specijalneSposobnosti());
  console.log(Trevor.specijalneSposobnosti());           SUBHANALLAH VISE SA OVIM DOSADAMA
  */
  class Karakteri {
    constructor(name, age, zanimanje) {
      this.name = name;
      this.age = age;
      this.zanimanje = zanimanje;
    }
  
    novaKlasa() {
      return `Name: ${this.name}, Age: ${this.age}, Zanimanje: ${this.zanimanje}`;
    }
  }
  
  class Michael extends Karakteri {
    constructor(age) {
      super("Michael", age, "Retired Bank Robber");
    }
  
    specijalneSposobnosti() {
      return "Slow Motion";
    }
  }
  
  class Franklin extends Karakteri {
    constructor(age) {
      super("Franklin", age, "Professional Driver");
    }
  
    specijalneSposobnosti() {
      return "Driving Skills";
    }
  }
  
  class Trevor extends Karakteri {
    constructor(age) {
      super("Trevor", age, "Crazy Criminal");
    }
  
    specijalneSposobnosti() {
      return "Rage Mode";
    }
  }
  

  const michael = new Michael(45);
  const franklin = new Franklin(28);
  const trevor = new Trevor(42);
  
  
  console.log(michael.novaKlasa());
  console.log(franklin.novaKlasa());
  console.log(trevor.novaKlasa());
  
  
  console.log(michael.specijalneSposobnosti());
  console.log(franklin.specijalneSposobnosti());
  console.log(trevor.specijalneSposobnosti());
  