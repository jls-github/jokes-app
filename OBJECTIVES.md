# User Stories

# MVP

[x] Users should see a new joke when the enter the website
[x] Users should be able to see a new joke if they press the new joke button
[x] Users should be able to rate the joke on a scale of 1 to 10 (10 being as funny as John's jokes)

# Stretch

[ ] If a joke is rated 4 or below, the screen will turn red
[x] If a joke is rated 8 or above, the screen will turn green


# ROADMAP

[x] Create file structure

[x] fetch the data
    [x] Probably be a reusable function
    [x] Use the joke api - https://github.com/15Dkatz/official_joke_api

[x] Modify the DOM in some way
    [x] create a reusable div to hold the joke
    [x] Append a new joke

[x] Generate new joke
    [x] Remove the old joke
    [x] Fetch the api for a new joke

[x] Add rating functionality
    [x] This should be unique for each individual joke
    [x] Create an input to give a rating
    [x] Create a place where the rating will go
    [x] Rating should only take in numbers
    [x] Rating numbers should be limited 1-10

[x] Do some styling
    [x] Title
        [x] Centered
        [x] h1
    [x] background for my page
        [x] light green
    [x] joke container in a box
        [x] "Joke of the Day"
        [x] Centered
        [x] h2
        [x] Everything else will be aligned left
        [x] button
            [x] green background
            [x] white text
        [x] white background
        [x] thicker border
        [x] drop shadow

[x] Turn rating number green if rating is 8 or above
    [x] Conditional logic 
        [x] if (rating >= 8) make color green