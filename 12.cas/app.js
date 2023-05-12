const random = {
    broj: 25,
    godine: 29,
    ucenici: [
        {
            name: "Medina",
            proffesion: "uvek kasni"
        },
        {
            name: "Selma",
            proffesion: "samo spava"
        }
    ],
    saySmor() {
        console.log("smor" + random.broj);  //index pristupa nizu a. pristupa objektu
    },
};

random.saySmor();

const nasNiz = classroom.ucenici; 