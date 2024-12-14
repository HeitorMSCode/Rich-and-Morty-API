const url = "https://rickandmortyapi.com/api/character"
var cardsPersonagem = ""
var todosPersonagens = document.querySelector(".all-cards")

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao acessar a API")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        data.results.map(personagem => {
            
            cardsPersonagem += `
            <div class="character-container">
                <img class="char-img" src="${personagem.image}"/>
                <div class="container-status">
                    <h1 class="Name">${personagem.name}</h1>
                    <p class="Status">${personagem.status} - ${personagem.species}</p>
                    <p class="Location">Last known location: </p>
                    <p class="true-location-one">${personagem.location.name}</p>
                    <p class="Location-space">First seen in: </p>
                    <p class="true-location">${personagem.location.name}</p>
                </div>
            </div>
            `
        })
        console.log(cardsPersonagem)
        todosPersonagens.innerHTML = cardsPersonagem
    })