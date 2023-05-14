/*const classroom = {
    brojUcenika: 10,
    vremeCasa: 10.0,
    ciklus: "2 ciklus",
    profesor: "aldin",
    ucenici: [
      // [prvi objekat, drugi objekat, treci objekat]
      {
        name: "selma",
        proffesion: "laboratoriski tehnicar",
      },
      {
        name: "medina",
        proffesion: "hafiza",
      },
      {
        name: "maida",
        proffesion: " nista bukv",
      },
    ],
    sayHello() {
      console.log("hello " + classroom.profesor);
    },
    helloSelma() {
      console.log("hello" + classroom.ucenici[0].name);
    },
  };
  
  classroom.sayHello();
  
  const nasNiz = classroom.ucenici;
  // const imanNiz = nasNiz.map((el) => el.name);
  const imanNiz = nasNiz.map((el) => {
    return {
      name: el.name,
    };
  });
  
  console.log(imanNiz);*/



/*const bekara = {
    brojstranica: 58,
    ajeti: 286,
    vremeucenja: "30 dana",
    mualima: "Nelma",
    ucenici:[
{        name:'Dzelila',
         naucila: "6 stranica",
    },
    {
        name: "medina",
        naucila:"15 stranica",
    },
],
sayMashaAllah() { 
    console.log("MAshaAllah" + bekara.ucenici[1].name);
},
}
bekara.sayMashaAllah();*/
 
const knjige = [
    {
        autor:"Ivo Andric",
        godina: 1954,
        ime: "prokleta avlija",
    },
{
    autor: "Tili Kol",
    godina: 2020,
    ime: "Hiljadu njegovih poljubaca",
},
{
    autor: "Vuk Karadzic",
    godina:1910,
    ime:"cirilica"
}
]

function filtrirajKnjigePoGodini(godina) {
const filtriraneKnjige = knjige.filter(knjiga => knjiga.godina < 2021);
const naslovi = filtriraneKnjige.map(knjiga => knjiga.naslov);
  return naslovi;
};
//console.log(filtrirajKnjigePoGodini);

const filtriraniNaslovi = filtrirajKnjigePoGodini(knjige, 2017);
console.log(filtriraniNaslovi);