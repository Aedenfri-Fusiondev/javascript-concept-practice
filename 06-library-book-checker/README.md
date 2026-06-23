# Library Book Search

An interactive JavaScript app that searches 
and checks book availability using higher 
order functions.

## What It Does
- Search a book by title using find()
- Check if a genre exists using some()
- Check if ALL books in a genre are in 
  stock using filter() + every()

## Edge Cases Handled
- Book not found → shows error message
- Genre doesn't exist → warns before 
  running every()
- Empty input → clears after each search

## What I Learned
find() returns one item — not an array.
some() answers "does anyone match?"
every() answers "do ALL of them match?"

Combining filter() + every() taught me 
to always check if the filtered array 
is empty before running every() — 
otherwise it returns true by default 
on empty arrays, which is misleading.

## Technologies Used
- Pure JavaScript
- DOM manipulation
- ES6+ array methods

## Author
Afri | Frontend Developer