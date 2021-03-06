const getJokes = () => {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
}

const changeRatingColor = (jokeRating, ratingInput) => {
    if (ratingInput.value >= 8) {
        jokeRating.style.color = "green"
    } else {
        jokeRating.style.color = "black"
    }
}

const createJokeDiv = (joke) => { // TODO: rename jokeContainer
    const jokeContainer = document.createElement('div')
    const jokeContainerTitle = document.createElement('h2')
    const setup = document.createElement('p')
    const punchline = document.createElement('p')
    const jokeRating = document.createElement('p')
    const ratingInput = document.createElement('input')
    const ratingBtn = document.createElement('button')

    jokeRating.id = "joke-rating"
    ratingInput.id = "rating-input"
    jokeContainerTitle.className = "joke-container-title"

    setup.innerText = joke.setup
    punchline.innerText = joke.punchline
    jokeRating.innerText = "Rating: "
    ratingBtn.innerText = "Rate"
    jokeContainerTitle.innerText = "Joke of the Day!"

    ratingInput.type = "number"
    ratingInput.min = 1
    ratingInput.max = 10

    ratingBtn.addEventListener('click', () => {
        // create a function that changes the rating
            // it will take in the jokeRating, ratingInput as an argument
            // if ratingInput.value >= 8
                // jokeRating.style.color = "green"

        changeRatingColor(jokeRating, ratingInput)
        jokeRating.innerText = "Rating: " + ratingInput.value
    })

    jokeContainer.append(jokeContainerTitle, setup, punchline, jokeRating, ratingInput, ratingBtn)

    return jokeContainer
} 

const appendJoke = (jokeDiv) => {
    const jokeContainer = document.getElementById('joke-container')
    jokeContainer.innerHTML = ""
    jokeContainer.append(jokeDiv)
}

const handleFetchError = () => {
    const jokeContainer = document.getElementById('joke-container')
    const warning = document.createElement('p')

    warning.innerText = "Something went wrong..."

    jokeContainer.append(warning)
}

const generateJoke = () => {
    getJokes().then((joke) => {
        const jokeDiv = createJokeDiv(joke)
        appendJoke(jokeDiv)
    })
    .catch(handleFetchError)
}

const newJokeBtn = document.getElementById('new-joke-btn')

newJokeBtn.addEventListener('click', generateJoke)

generateJoke()
