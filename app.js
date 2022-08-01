const dice = document.querySelector(".dice");

const card = document.querySelector(".advice-container");



const diceClick = () =>{
    let randomNo = Math.floor(Math.random() * 224) 
    const url = `https://api.adviceslip.com/advice/${randomNo}`

    fetch (url)
        .then(response => response.json())
        .then(data =>{
            let id = data.slip.id;
            let advice = data.slip.advice

            
            card.innerHTML = `
                <h4>ADVICE <span class="id">#${id}</span></h4>
                <p class="advice">${advice}</p>
            `
        })

}

dice.addEventListener("click" , diceClick)
   







