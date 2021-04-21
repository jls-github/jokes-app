const getJokes = () => {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
}

const createJokeDiv = (joke) => { // TODO: rename jokeContainer
    const jokeContainer = document.createElement('div')
    const setup = document.createElement('p')
    const punchline = document.createElement('p')

    setup.innerText = joke.setup
    punchline.innerText = joke.punchline

    jokeContainer.append(setup, punchline)

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
