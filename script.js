function gotQuotes() {
    fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random')
        .then(response => response.json())
        .then(got => {
            console.log(got)
            document.getElementById('quote').innerHTML = `<p><cite>"${got.sentence}"</cite></p>`
            document.getElementById('character').innerHTML = `<p>${got.character.name}</p>`

        }).catch(erro => {
            console.log('nada encontrado')
        })
}
setInterval(gotQuotes, 500 * 30)
gotQuotes()