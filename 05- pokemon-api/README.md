# Pokemon Search App

A browser-based JavaScript app that fetches 
live Pokemon data from the PokeAPI and displays 
the name, image and weight instantly.

## What It Does
- Type any Pokemon name in the input box
- Click Fetch to retrieve live data from PokeAPI
- Displays Pokemon name, image and weight
- Clears previous result before each new search
- Shows a friendly error message for wrong names

## How It Works
The app uses the Fetch API with Async/Await to 
make HTTP requests to:
https://pokeapi.co/api/v2/pokemon/{name}

It checks response.ok before processing data — 
if the fetch fails, it throws an error immediately 
instead of wasting time and memory processing 
a bad response.

## Technologies Used
- HTML — structure
- JavaScript — Fetch API, Async/Await, DOM manipulation
- PokeAPI — free public Pokemon data API

## What I Learned
I built this project twice.

The first time — I struggled for 65 minutes, 
hit 4 bugs, and couldn't understand why things 
were breaking.

So I stopped. Spent two days deeply learning 
Callbacks, Promises, and Async/Await from scratch.

The second time — I rewrote the entire project 
in 40 minutes. Clean. Confident. Every line owned.

The lesson: understanding the concept deeply 
is faster than debugging blindly.

## Author
Afri Mohammed | Frontend Developer
[GitHub](https://github.com/Aedenfri-Fusiondev)