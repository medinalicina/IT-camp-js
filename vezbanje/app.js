function kolikoMalih(recenica) {
        let brojac = 0;
       for (let i = 0; i < recenica.length; i++) {
         if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
           brojac++;
         }
        }
      return brojac;
     }
     console.log(kolikoMalih("da li BROJI razmake"));
    
     function kojihVise(recenica) {
       let brojacMalih = 0;
       let brojacVelikih = 0;
       for (let i = 0; i < recenica.length; i++) {
         if (recenica[i] !== recenica[i].toUpperCase()) {
           brojacMalih++;
         } else if (recenica[i] !== recenica[i].toLowerCase()) {
           brojacVelikih++;
         }
       }
     }
    
     if (brojacMalih > brojacVelikih) {
       return `malih ima ${brojacMalih} i njih je vise `;
     } else if (brojacMalih < brojacVelikih) {
       return `velikih ima ${brojacVelikih} i njih ima vise `;
     } else {
       return "u ovom stringu ima isti broj slova ";
     }
     console.log(kojihVise("SSaaa"));
    
    //==========================================================================//
    
    const toLower = (recenica) => {
      let nova = "";
      for (let i = 0; i < recenica.length; i++) {
        nova += recenica[i].toLoweCase();
      }
      return nova;
    };
    
    const toLower2 = (recenica) => {
      return recenica.toLoweCase();
    };
    
    
    
    let nekaMatrica = [ 
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  console.log(nekaMatrica);
  for (let i = 0; i < nekaMatrica.length; i++) {
      for (let j = 0; j < nekaMatrica[i].length; j++) {
        if(i + j === 2){ 
        console.log();
     }
    }
  }





 for (let i = 0; i < nekaMatrica.length; i++) {
  
 console.log(matrica[i][i]);
}  
for (let i = 0; i < matrica.length; i++) {
  for (let j = 0; j < matrica[i].length; j++) {
    console.log(matrica[i][j]);
 }
}


do{
  console.log("broj manji od 10", "DO");
  i++
}while(i < 10);

