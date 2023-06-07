class User {
    name;
    height;
    width;
    age;
  
    constructor(ime, visina, sirina, godine) {
      this.name = ime;
      this.height = visina;
      this.width = sirina;
      this.age = godine;
    }
  
    checkUserAge() {
      if (this.age < 16) {
        console.log("You can pass!");
      } else {
        console.log("Sorry, you are too old!");
      }
    }
  
    checkUserHeight() {
      if (this.height < 160) {
        console.log("You can pass!");
      } else {
        console.log("Sorry, you can not pass!");
      }
    }
  }
  
  const aldin = new User("Aldin", 170, 100, 20);
  
  const redzi = new User("Redzi", 182, 3, 18);
  
  // aldin.checkUserAge();
  // aldin.checkUserHeight();
  
  const ucenik1 = "Redzi";
  const ucenik2 = "Haris";
  const ucenik3 = "Tarik";
  
  const ucenik1godine = 33;
  const ucenik2godine = 18;
  const ucenik3godine = 25;
  
  // poredjati ucenike po starosti
  
  if (ucenik1godine > ucenik2godine && ucenik1godine > ucenik3godine) {
    if (ucenik2godine > ucenik3godine) {
      console.log(
        `${ucenik1} je stariji od ${ucenik2}, a ${ucenik2} je stariji od ${ucenik3}`
      );
    } else {
      console.log(
        `${ucenik1} je stariji od ${ucenik3}a, a ${ucenik3} je stariji od ${ucenik2}a`
      );
    }
  }