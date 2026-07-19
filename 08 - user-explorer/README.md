# User Search App — v1

A browser-based JavaScript app that searches 
for users by name using the JSONPlaceholder API.

## What It Does
- Type a name in the search box
- Fetches user data from JSONPlaceholder API
- Displays name, email and username of results
- Shows loading state while fetching
- Validates empty input before searching
- Handles API errors gracefully

## How It Works
The app sends a GET request to:
https://jsonplaceholder.typicode.com/users?name={input}

It uses Async/Await with try/catch for clean 
error handling and displays results dynamically 
using DOM manipulation.

## Technologies Used
- Pure JavaScript
- Fetch API + Async/Await
- DOM manipulation
- JSONPlaceholder API

## Author
Afri | Frontend Developer
[GitHub](https://github.com/Aedenfri-Fusiondev)