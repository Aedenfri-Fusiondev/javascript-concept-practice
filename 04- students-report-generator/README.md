# Student Report Generator

A browser-based JavaScript app that instantly 
generates a ranked student performance report 
— built with pure HTML, CSS and JavaScript.
No frameworks. No libraries. Just code.

## What It Does
- Click one button to generate the full report
- Filters students who scored above 60
- Calculates the class average automatically
- Labels each student as Above or Below Average
- Sorts students from highest to lowest marks
- Displays ranked results directly in the browser

## How It Works
The Generate Report button triggers a chain of 
four JavaScript functions working together:

| Function | Purpose |
|---|---|
| average() | Calculates class average once |
| sorting() | Sorts students highest to lowest |
| getReport() | Combines sort + average + status |
| addEventListener | Renders results to the DOM |

## Technologies Used
- HTML — structure
- CSS — gradient card UI
- JavaScript — logic and DOM manipulation

## How to Run
No setup required.
Open index.html in any browser 

## What I Learned
This project taught me how multiple functions 
can work together as a system. I learned that 
calling average() inside a loop was inefficient 
— so I moved it outside and called it once.

Small decisions like that are the difference 
between code that works and code that performs.

## Author
Afri | Frontend Developer
[GitHub](https://github.com/Aedenfri-Fusiondev)