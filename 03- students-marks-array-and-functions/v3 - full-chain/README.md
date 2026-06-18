# Student Mark Filter, Average & Report Generator

## V3 — Full Method Chain

The same project rebuilt again — this time as a single 
clean pipeline using method chaining.

## What Changed from V2

| Feature | V2 | V3 |
|---|---|---|
| Code style | Separate steps | Single chain |
| Array mutation | students.sort() mutates original | [...students] spread protects original |
| Structure | Multiple variables | One expression |
| Output | console.log | console.table |
| Lines | ~20 lines | ~15 lines |

## What It Does
- Calculates average using reduce
- Filters students above 60
- Sorts highest to lowest
- Adds status and grade in one map
- Displays as formatted table

## What I Learned
Chaining filter → sort → map into one expression 
taught me how data pipelines work.

Spreading [...students] before sort protects the 
original array from mutation — something V2 didn't do.

Clean code isn't just fewer lines. 
It's the right order of operations.

## Technologies Used
- Pure JavaScript — No frameworks
- ES6+ method chaining
- Spread operator

## Author
Afri Mohammed | Frontend Developer