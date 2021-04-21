const getJokes = () => {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
}

const createJokeDiv = (joke) => { // TODO: rename jokeContainer
    const jokeContainer = document.createElement('div')
    const setup = document.createElement('p')
    const punchline = document.createElement('p')
    const jokeRating = document.createElement('p')
    const ratingInput = document.createElement('input')
    const ratingBtn = document.createElement('button')

    jokeRating.id = "joke-rating"
    ratingInput.id = "rating-input"

    setup.innerText = joke.setup
    punchline.innerText = joke.punchline
    jokeRating.innerText = "Rating: "
    ratingBtn.innerText = "Rate"

    ratingInput.type = "number"
    ratingInput.min = 1
    ratingInput.max = 10

    ratingBtn.addEventListener('click', () => {
        jokeRating.innerText = "Rating: " + ratingInput.value
    })

    jokeContainer.append(setup, punchline, jokeRating, ratingInput, ratingBtn)

    return jokeContainer
} 

const appendJoke = (jokeDiv) => {
    const jokeContainer = document.getElementById('joke-container')
    jokeContainer.innerHTML = ""
    jokeContainer.append(jokeDiv)
}

const generateJoke = () => {
    getJokes().then((joke) => {
        const jokeDiv = createJokeDiv(joke)
        appendJoke(jokeDiv)
    })
}

const newJokeBtn = document.getElementById('new-joke-btn')

newJokeBtn.addEventListener('click', generateJoke)

generateJoke()
