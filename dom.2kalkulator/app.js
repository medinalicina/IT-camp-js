//queryselector all on selektuje sve sto postoji a naprimer bez ovog all on selektuje i prikazuje samo prvi
//for each prolazi kroz sve (ceo kod) slican je mapu
//add event listener on slusa svaku promenu
//e.target odradjuje te neke primene e je event
//da se uradi kalkulator pei cemu cemo brojeve ispisivati u gornjnem delu kalkulatora,  dodati takodje i puta, podeljeno, i sve te funkcije da se odradjuu i prikazuju u konzolama
for (i = 0; i < buttons.length; i++) {

    
    //     buttons[i].addEventListener('click',(ev)=>{
    //         inputText.value+= ev.target.innerText
            
    //     })
    // }
    // input = "14*4"
    
    // newinp = input.split("*")
    // console.log(newinp[0]*newinp[1]);
    
    const buttons = document.querySelectorAll('.button')
    const div1 = document.querySelector('.calculator')
    const inputText = document.querySelector('#display')
    const clear = document.querySelector('#clear')
    let equal = document.querySelector('#equal')
    
    clear.addEventListener('click',(ev)=>{
        ev.preventDefault()
        inputText.value = ''
    })
    
    buttons.forEach((el) => {
        el.addEventListener('click', () => {
            inputText.value += el.value
        // const vrijednost = el.value;
        // inputText.value += vrijednost;
        });
      });
    
      
    equal.addEventListener('click', (ev) => {
        ev.preventDefault()
        inputText.value = eval(inputText.value)
    
    });