//ENKAPSULACIJA/// 
//protekted 
//ako stavimo # u nekom propertiju onda ce on bit privatan i moci ce da se koristi sammo u toj klasi
class Maxi {
    #ime;
    lokacija;
    logo;

    constructor(name, location, logo){
        this.ime = name;
        this.lokacija = location;
        this.logo = logo;
    }
}
 const maxi = new Shop("maxi", "1.maj", "MaXi");

 console.log(maxi);

class Ja {
    ime;
    prezime;
    #godine;

    constructor(name,  prezime, godine) {
        this.ime = name;
        this.prezime = prezime;
        this.#godine = godine;
    }

    get mojeGodine(){
        return this.#godine;
    }
    setgodine(nekeGodine){
        this.#godine = nekeGodine; 
    }

}

const novoJa = new Ja("medina", "licina", "16")
console.log(novoJa);

//geter nam sluzi da izvucemo osobinu iz propertija
//seter radi suprotno neki argument setuje na neko drugo mest