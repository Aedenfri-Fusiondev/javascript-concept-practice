const students = [
    {name: "Arun" ,marks:75},
    {name: "Priya" ,marks:48},
    {name: "Karthik" ,marks:82},
    {name: "Divya" ,marks:55}
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
        status.push(` Above Average`)
    }
    else if(students[i].marks < average()){
        status.push(` Below Average`)
    }
}
    return status
}
function sorting(){
    return students.sort((a,b) => b.marks - a.marks)
   
}
function getReport(){
    let fullReport =[]
    let sorted = sorting();
    let avg =average()

    for(let i=0 ; i<sorted.length ; i++){
        let status 

        if(sorted[i].marks > avg){
        status = ` Above Average`
        }
        else if(sorted[i].marks < avg){
        status = ` Below Average`
        }

            
     fullReport.push({
           name : sorted[i].name,
           marks : sorted[i].marks,
           status : status
     })
}
    return fullReport
}
console.log(getReport())