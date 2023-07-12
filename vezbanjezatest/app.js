/*Такође можемо користити +=оператор да повежемо стринг на крај постојеће променљиве стринга. Ово може бити од велике помоћи да се прекине дугачак низ у неколико редова.
JEDNOM KADA SE KREIRA JEDAN STRING ON SE VISE NE MOZE MENJATI
Једноставан начин за додавање података на крај низа је преко push()функције.

.push()узима један или више параметара и "гура" их на крај низа.

Примери:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

\.pop()се користи за избацивање вредности са краја низа. Можемо да сачувамо ову избачену вредност тако што ћемо је доделити променљивој. Другим речима, .pop()уклања последњи елемент из низа и враћа тај елемент.

Било који тип уноса може бити избачен из низа - бројеви, стрингови, чак и угнежђени низови.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
Први console.logће приказати вредност 6, а други ће приказати вредност [1, 4].

pop()увек уклања последњи елемент низа. Шта ако желите да уклоните прву?

Ту .shift()долази на сцену. Ради исто као .pop(), само што уклања први елемент уместо последњег.

Пример:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArrayби имала вредност стринга Stimpsonи ourArrayимала би ["J", ["cat"]].

Не само да можете shiftелементе са почетка низа, већ можете и unshiftелементе на почетак низа, тј. додати елементе испред низа.

.unshift()ради тачно као .push(), али уместо додавања елемента на крај низа, unshift()додаје елемент на почетак низа.

Пример:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
После shift, ourArrayби имало вредност ["J", "cat"]. После unshift, ourArrayби имало вредност ["Happy", "J", "cat"].*/









////////////////////////TEORIJA ZA TEST KOJI SLEDI//////////////////////////////////////////

 //toUpperCase(); - metoda koja pretvara ceo string u velika slova. 
 // toLowerCase(); - metoda koja pretvara ceo string u mala slova. 
 // .length metoda nam sluzi za dobijanje duzine stringa 
 // Postoje 3 metode za ekstraktovanje (uzimanje dela) stringa: 
 // 1. slice(start, end) end nije ukljucen u opseg. 
 // 2. substring(start, end) razlika u odnosu na slice je da substring nejeste to sto  prihvata negativne indekse. 
 // 3. substr(start, length) 
 // replace() metoda vrsi zamenu nekoliko karaktera datog stringa. Ima 2 argumenta. Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa. 
 // concat() metoda vrsi spajanje dva ili vise stringova. 
 // Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti). 
 // trim() metoda brise razmake sa obe strane stringa. 
 // split() metode nam vraca niz na osnovu nekog stringa na koji je primenjen. 
 // indexOf() metoda nam vraca prvu poziciju gde se zapravo nalazi poslati argument(jedan ili vise karaktera) kada se radi o nekom stringu.Drugi argument predstavlja poziciju od koje krecemo sa trazenjem stringa. 
 // lastIndexOf() metoda nam vraca poslednju poziciju gde se zapravo nalazi poslati argument(jedan ili vise karaktera) kada se radi o nekom stringu. 
 // Ako trazimo poziciju nepostojeceg stringa unutar nase recenice, rezultat ce biti broj -1 
 // search() metoda nam daje poziciju (index) nekog stringa (argumenta metode). 
 // Razlike izmedju indexOf() i search() metoda: 
 // 1.indexOf() metoda dozvoljava drugi argument (pozicija odakle krece trazenje stringa) 
 // 2.search() metoda dozvoljava Regular Expressions. 
 // match() metoda nam vraca niz(pronadjenih elemenata). 
 // includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u stringu na koji primenjujemo metodu.     Includes() metoda dozvoljava drugi argument sto zapravo predstavlja poziciju od koje ce se traziti dati string. 
 // startsWith() i endsWith() metode nam vracaju boolean u zavisnosti od toga da li dati string pocinje (zavrsava) argumentom metode. 
 // toString() pretvara broj u string. Ova metoda pretvara bilo koji tip podatka u string. 
 // toExponential() - nam vraca string broja, zaokruzen na onoliko decimala, koliki je argument metode. 
 // toFixed() - vraca string broja, koji ce biti zaokruzen na onoliko decimala koliki je zapravo argument. 
 // toPrecision() metoda vraca string broja, sa onoliko cifara koliki je argument funkcije. 
 // valueOf() metoda vraca vrednost neke promenljive. Ova metoda vazi za sve tipove podataka u JavaScriptu. 
 //////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 /////////////////////////////////////////////// MATH METODE //////////////////////////////////////////////// 
 //////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 // Math.min() nam vraca najmanji broj od poslatih. Argumenata moze imati neograniceno. 
 // Math.max() nam vraca najveci broj od poslatih. Argumenata moze imati neograniceno. 
 // Math.random() nam vraca broj izmedju 0(ukljucujuci) i 1(nije ukljucena). 
 // Math.log(x)    - vraca vrednost logaritma broja x za osonvu e 
 // Math.log2(x)   - vraca vrednost logaritma broja x za osonvu 2 
 // Math.log10(x)  - vraca vrednost logaritma broja x za osonvu 10 
 //////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 //////////////////////////////////// METODE ZA PRIKAZIVANJE DATUMA ///////////////////////////////////////// 
 //////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 // 1. toString() 
 // 2. toUTCString() 
 // 3. toDateString() 
 // 4. toISOString() 
 // 5. toTimeString() 
 // 6. toLocaleTimeString() 
 /////////////////////////// Get metode - Koristimo ih za dobijanje informacija iz Date objekta. 
 // getFullYear() 
 // getMonth() 
 // getDate() 
 // getDay() 
 // getHours() 
 // getMinutes() 
 // getSeconds() 
 // getMiliseconds() 
 // getTime() 
 /////////////////////////// Set metode - Dozvoljavaju menjanje nekih rednosti koda Date objekta. 
 // setFullYear() 
 // setMonth() 
 // setDate() 
 // setHours() 
 // setMinutes() 
 // setMiliseconds() 
 // setTime() 
 //////////////////////////// 
 // push() metoda nam omogucava dodavanje vise od jednog elementa 
 // Za pretvaranje niza u string mozemo iskoristiti dve metode. 
 // 1. toString() 
 // 2. join() 
 // pop() metoda brise poslednji element iz niza. 
 // unshift() metoda dodaje na pocetku niza jedan ili vise elemenata. 
 // shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1. shift() metoda vraca izbrisani element. Kao kod pop() metode. 
 // concat() metoda se koristi za spajanje nizova. concat() metoda pravi novi niz. 
 //// splice() metoda je najmocnija alatka kod nizova u JavaScriptu. Omogucava nam promene u nizu na zeljenoj poziciji. Mozemo dodati (koliko hocemo) elemenata na nekom mestu. Mozemo izbrisati (koliko hocemo) elemenata na nekom mestu. splice() metoda uzima minimum 2 argumenta: Prvi argument predstavlja poziciju od koje ce se vrsiti neke promene. Drugi argument predstavlja broj elemenata koje brisemo iz niza. splice() metoda nam vraca niz sa izbrisanim elementima. //// 
 // sort() metoda sortira niz abecedno. 
 // reverse() metoda sortira niz obrnutim redosledom(u odnosu na prethodno stanje). 
 // Ako zelimo sortiranje (Z-A) moramo prvo izvrsiti sort(), pa onda reverse(). 
 // sort() metoda sama ne vrsi ispravno sortiranje kada se radi o brojevima. 
 // keys() metoda vraca Array Iterator Object sa kljucevima(indeksima) nekog niza. 
 // entries() metoda vraca Array Iterator Object sa key\value parovima nekog niza. 
 // forEach() metoda poziva callback funkciju za svaki element niza. 
 // map() metoda kreira novi niz (iste duzine) sa logikom predstavljenom unutar callback funkcije unutar date metode. 
 // filter() metoda kreira novi niz sa onim elementima koji su prosli test. Novodobijeni niz moze imati maksimalno elemenata kao niz na koji se primenjuje metoda, takodje moze biti prazan niz. 
 // reduce() metoda vraca jednu vrednost. Iteracija se vrsi kroz ceo niz. 
 // every() metoda proverava da li su svi elementi niza zadovoljili uslov.  (vraca boolean) 
 // some() metoda proverava da li bar jedan element niza zadovoljava uslov. (vraca boolean) 
 // find() metoda vraca vrednost prvog elementa koji je prosao test funkcije. 
 // findIndex() metoda vraca index prvog elementa koji je zadovoljio uslov. 
 // flat() metoda se koristi kada unutar niza imamo element koji je niz, i zelimo da sve podelemente izvucemo na nacin da oni predstavljaju elemente glavnog niza. 
 // JSON.stringify() pretvara nas objekat u JSON format pa JSON u string. 
 // 2. JSON.parse() Analizira se neki string i u slucaju mogucnosti pretvara u objekat (nama citljiv podatak) 
 // Object.freeze(obj) metoda čini taj objekat nepromenljivim. 
 // Object.seal(obj) čini objekat promenljivim s tim što nema mogućnost dodavanja(brisanja) novih svojstava i metoda. 
 // Object.keys(obj) vraća niz ključeva 
 // Object.entries(obj) vraća niz nizova. 
 // call() metoda za prvi argument ima objekat na koji se primenjuje, ostali argumenti metode koja se izvrsava. 
 // apply() metoda za prvi argument ima objekat na koji se primenjuje, drugi argument je niz gde smestamo argumente metode koja se izvrsava, 
 // bind() zahteva prethodno definisanje promenljive (funkcije) za odredjeni objekat, pa onda pozivanje funkcije sa eventualnim argumentima. 
 // Postoji built-in metoda u JavaScriptu koja proverava a li je neki broj Integer (ceo): 
 // Number.isInteger();

//Closure je koncept u JavaScriptu koji se odnosi na sposobnost funkcije da pristupa i pamti vrednosti van svojih sopstvenih okvira (scope-a). Kada se funkcija kreira, ona zadržava pristup svim promenljivima i parametrima koji su bili dostupni u trenutku njenog kreiranja. Closure se često koristi za implementaciju privatnih promenljivih i enkapsulaciju u JavaScriptu.

// Map, Filter i Reduce: Ovo su tri metode dostupne za manipulaciju i obradu elemenata u JavaScript nizovima:

// Map: Metoda map() se koristi za stvaranje nove niza transformiranjem svakog elementa izvornog niza. Primjenjuje se funkcija na svaki element niza i vraća novi niz s rezultatima.

// Primjer map() 


// let brojevi = [1, 2, 3, 4, 5];
// let kvadrati = brojevi.map((broj) => broj * broj);
// console.log(kvadrati); // Ispis: [1, 4, 9, 16, 25]
// //Filter:
//  Metoda filter() se koristi za filtriranje elemenata izvornog niza na temelju određenog uvjeta. Vraća novi niz koji sadrži samo one elemente koji zadovoljavaju uvjet.

// Primjer filter() 


// let brojevi = [1, 2, 3, 4, 5];
// let parniBrojevi = brojevi.filter((broj) => broj % 2 === 0);
// console.log(parniBrojevi); // Ispis: [2, 4]
// Reduce: Metoda reduce() se koristi za smanjenje niza na jednu vrijednost primjenom funkcije akumulatora na sve elemente niza. Akumulator prati trenutno stanje nakon svake iteracije.

// Primjer reduce() 


// let brojevi = [1, 2, 3, 4, 5];
// let zbroj = brojevi.reduce((akumulator, broj) => akumulator + broj, 0);
// console.log(zbroj); // Ispis: 15
// U primjerima se koriste funkcije lambda (strelica) za jednostavno izražavanje operacija koje se primjenjuju na svaki element.

// Ove metode (map, filter i reduce) su korisne za obradu i manipulaciju podataka u JavaScript nizovima na deklarativan način.







// PRVI ZADATAK*/
//  let a=+prompt("unesite neki broj")

// if (isNaN(a)) {
//     console.log("Uneta vrednost mora biti broj")
// } else {
//     console.log(a*a)
// }

// objasnjene zadatka break.1

// Kod koji ste naveli koristi funkciju `prompt()` za unos broja od korisnika. Evo detaljnog objašnjenja:

// 1. `let a = +prompt("unesite neki broj")`: Ova linija koda koristi funkciju `prompt()` za prikazivanje dijaloga gde korisnik može uneti broj. Uneti broj se dodeljuje promenljivoj `a`. Ovde se koristi unarni operator `+` ispred `prompt()` kako bi se konvertovao uneseni tekst u broj.

// 2. `if (isNaN(a)) { console.log("Uneta vrednost mora biti broj") }`: Ova linija koda proverava da li uneta vrednost, koja je dodeljena promenljivoj `a`, nije broj. `isNaN()` funkcija se koristi za proveru da li vrednost nije broj (NaN - Not-a-Number). Ako je uneta vrednost nije broj, ispisuje se poruka "Uneta vrednost mora biti broj".

// 3. `else { console.log(a*a) }`: Ako uneta vrednost jeste broj, izvršava se ovaj blok koda. `a*a` računa kvadrat unete vrednosti `a`, a rezultat se prikazuje na konzoli pomoću `console.log()`.

// Ukratko, kod koristi funkciju `prompt()` za unos broja od korisnika. Ako je uneta vrednost broj, ispisuje se kvadrat unete vrednosti. Ako uneta vrednost nije broj, ispisuje se poruka da mora biti unet broj.










// DRUGI ZADATAK
//  for (i=1;i<=100;i++) {
//     if (i%3===0 && i%5===0) {
//        console.log("FIZZ BUZZ")}
//   else if (i%3===0) {
//        console.log("FIZZ")
//    } else if (i%5===0) {
//        console.log("BUZZ")
//    } 

//    else console.log(i)

/*Cilj problema je da se ispise niz brojeva od 1 do 100, ali umesto brojeva koji su deljivi sa 3 ispisuje se "FIZZ", umesto brojeva koji su deljivi sa 5 ispisuje se "BUZZ", a umesto brojeva koji su deljivi i sa 3 i sa 5 ispisuje se "FIZZ BUZZ".

Sada ću detaljno objasniti kako funkcioniše ovaj kod:

for (i = 1; i <= 100; i++): Ova linija koda koristi petlju for kako bi se prolazilo kroz brojeve od 1 do 100. Početna vrednost i je postavljena na 1, uslov za izlazak iz petlje je i <= 100, a nakon svake iteracije vrednost i se povećava za 1.

if (i % 3 === 0 && i % 5 === 0): Ova linija proverava da li je broj i deljiv i sa 3 i sa 5. Ako jeste, ispisuje se "FIZZ BUZZ". Operator % se koristi za određivanje ostatka pri deljenju broja i sa 3 i 5. Ako je taj ostatak jednak 0, to znači da je broj deljiv sa 3 i 5.

else if (i % 3 === 0): Ako prvi uslov nije ispunjen, ovaj uslov proverava da li je broj i deljiv sa 3. Ako jeste, ispisuje se "FIZZ".

else if (i % 5 === 0): Ako ni prvi ni drugi uslov nisu ispunjeni, ovaj uslov proverava da li je broj i deljiv sa 5. Ako jeste, ispisuje se "BUZZ".

else console.log(i): Ako ni jedan od prethodnih uslova nije ispunjen, ispisuje se vrednost broja i.

Na kraju, kada se ovaj kod izvrši, dobijamo niz ispisanih vrednosti koji će izgledati ovako:

1
2
FIZZ
4
BUZZ
FIZZ
7
8
FIZZ
BUZZ
11
FIZZ
13
14
FIZZ BUZZ
16
...
i tako dalje, sve do 100.




Regenerate response

















// TRECI ZADATAK
let recenica ="Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa"

let nova = ""
for (i=0;i<recenica.length;i++) {
    if (recenica[i] === "a" || recenica[i] === "e" || recenica[i] === "i" || recenica[i] === "o"|| recenica[i] === "u") {
        nova+=recenica[i].toUpperCase()
    }
    else nova+=recenica[i]
}
console.log (nova+".")
//Ovaj kod prolazi kroz svaki karakter u datoj rečenici `recenica` i proverava da li je taj karakter samoglasnik (a, e, i, o, u). Ako jeste, karakter se dodaje u promenljivu `nova` u velikom obliku (velika slova). U suprotnom, karakter se dodaje u `nova` bez ikakvih promena. Na kraju se rezultat prikazuje na konzoli sa dodatnom tačkom na kraju.

Evo detaljnog objašnjenja koraka u kodu:

1. `let recenica = "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa"`: Ova linija koda definiše promenljivu `recenica` i dodeljuje joj vrednost datu rečenicu.

2. `let nova = ""`: Ova linija koda definiše praznu promenljivu `nova` u koju će se dodavati karakteri tokom iteracije.

3. `for (i=0;i<recenica.length;i++)`: Ova petlja `for` prolazi kroz svaki karakter u `recenica`. Početna vrednost brojača `i` je postavljena na 0, a uslov za izlazak iz petlje je `i<recenica.length`, što znači da će petlja se izvršavati sve dok je brojač manji od dužine rečenice.

4. `if (recenica[i] === "a" || recenica[i] === "e" || recenica[i] === "i" || recenica[i] === "o"|| recenica[i] === "u")`: Ova linija proverava da li je trenutni karakter `recenica[i]` jedan od samoglasnika "a", "e", "i", "o" ili "u". Ako jeste, uslov je ispunjen.

5. `nova += recenica[i].toUpperCase()`: Ako je karakter samoglasnik, dodaje se njegova velika verzija u promenljivu `nova` koristeći `.toUpperCase()` metodu. Ova metoda konvertuje karakter u veliko slovo.

6. `else nova += recenica[i]`: Ako trenutni karakter nije samoglasnik, dodaje se u promenljivu `nova` bez ikakvih promena.

7. `console.log(nova + ".")`: Na kraju se rezultat, koji je sadržan u promenljivoj `nova`, prikazuje na konzoli. Dodata je i tačka na kraju rečenice.

Na taj način, originalna rečenica se prolazi karakter po karakter, a samoglasnici se zamenjuju velikim slovima. Rezultujuća rečenica se prikazuje na konzoli.










//TEORIJA
let tekst = "Dobro jutro svima!";
let zamijeni = "jutro";
let zamjena = "veče";

let rezultat = tekst.replace(zamijeni, zamjena);
console.log(rezultat); // Ispis: Dobro veče svima!
//OVO JE FUNKCIJA REPLACE KOJA MENJA JEDAN ARGUMENT ZA NEKI DRUGI DATI ARGUMENT!

let string1 = "Dobro";
let string2 = "jutro";
let string3 = "svima";

let spojeniString = string1.concat(" ", string2, " ", string3);
console.log(spojeniString); // Ispis: Dobro jutro svima
// OVO JE METODA CONCAT.concat() metoda vrsi spajanje dva ili vise stringova. 



