// Concept: arrays, loops, functions, template literals.
// Build: filter students by marks, calculate average, compare each students. 

const students = [
    {name: "Arun" ,marks:75},
    {name: "Priya" ,marks:42},
    {name: "Karthik" ,marks:58},
    {name: "Divya" ,marks:95}
]
function filter(){
    let result = []
    for(let i=0 ; i<students.length ; i++){
        
    if(students[i].marks > 60){
        result.push(students[i])
    }
}
    return result
}
function average(){
    let finalResult =[]
    
    let total = 0
    for(let i=0 ; i<students.length ; i++){
    total = total + students[i].marks
    }
    let aboveAvg = total / students.length
   return aboveAvg
}
function knowAvg(){
    let status =[]
for(let i=0 ; i<students.length ; i++){
    if(students[i].marks > average()){
        status.push(`${students[i].name} Above Average`)
    }
    else if(students[i].marks < average()){
        status.push(`${students[i].name} Below Average`)
    }
}
    return status
}
console.log(average())
console.log(knowAvg()) 