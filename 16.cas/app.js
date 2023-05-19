///////////////////////////////////CLOSURE////////////////////////////////////////////////////////////////

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