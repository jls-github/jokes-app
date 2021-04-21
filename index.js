const getJokes = () => {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
}

getJokes().then(console.log)