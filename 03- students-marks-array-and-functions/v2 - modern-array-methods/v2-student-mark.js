
const students = [
    {name: "Arun" ,marks:75},
    {name: "Priya" ,marks:48},
    {name: "Karthik" ,marks:82},
    {name: "Divya" ,marks:55},
    {name: "anbu" ,marks:80}
]

//find average
const average = students.reduce((total,stdmark)=> total + stdmark.marks ,0) /students.length
console.log(average)
    
// sort descending
const sorting = students.sort((a,b)=> b.marks -a.marks)

// generate full report  
    let sorted = sorting
    let avg = average
    const fullReport = sorted.map(report =>{
        return{
           ...report,
           status:report.marks > avg ? "Above Average" : "Below Average",
           grade:report.marks > 70 ? "A" : report.marks > 60 ? "B" : "C"
    
        }
    })
console.log(fullReport)

