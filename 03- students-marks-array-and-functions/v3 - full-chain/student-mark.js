const students = [
    {name: "Arun" ,marks:75},
    {name: "Priya" ,marks:48},
    {name: "Karthik" ,marks:82},
    {name: "Divya" ,marks:55},
    {name: "anbu" ,marks:80}
]
//find average
const average = students.reduce((total,stdmark)=> total + stdmark.marks ,0) /students.length

// generate full report
const generateFullReport = [...students]
    .filter(above60 => above60.marks > 60)
    .sort((a,b)=> b.marks -a.marks)
    .map(fullreport=>{
    return{
        ...fullreport,
        status:fullreport.marks > average ? "Above Average" : "Below Average",
        grade:fullreport.marks > 70 ? "A" : fullreport.marks > 60 ? "B" : "C"
    }
});

  console.table(generateFullReport)