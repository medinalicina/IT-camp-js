const automobili = {
ja: ["vw", "audi", "targa", 4],
tajra: ["golf", "audi", "bmw"],
iman: ["peugeot", "fiat", "x5"],
bronja:["pagani", "mclaren", "rollce roys"],
};
const allCars = object.values(automobili);
console.log(allCars)
const drugiAutomobili = allCars.map((car) => [...car, car.length]);
console.log(drugiAutomobili);

printHello()
// hello

printDillion()
// ReferenceError: printDillion is not defined

function printHello() {
  console.log('hello')

  function printDillion() {
    console.log("dillion")
  }
}

//kada stavimo let onda ce ona da je podigne na vrh, isto tako i sa const 