const getJokes = () => {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
}

const createJokeDiv = (joke) => {
    const jokeContainer = document.createElement('div')
    const setup = document.createElement('p')
    const punchline = document.createElement('p')

    setup.innerText = joke.setup
    punchline.innerText = joke.punchline

    jokeContainer.append(setup, punchline)

    return jokeContainer
} 

getJokes().then((joke) => {
    const jokeDiv = createJokeDiv(joke)
    console.log(jokeDiv)
})