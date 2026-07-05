const user = {
  id: 101,
  profile: {
    fullName: "Alex Johnson",
    age: 21,
    occupation: "Frontend Developer",
    email: "alex.johnson@gmail.com",
    phone: "+91 9876543210",
  },

  address: {
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    pincode: 600001
  },

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub"
  ],

  hobbies: [
    "Coding",
    "Gaming",
    "Reading",
    "Photography"
  ],

  education: {
    college: "ABC Engineering College",
    degree: "B.E Computer Science",
    graduationYear: 2027
  },

  social: {
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson"
  },

  preferences: {
    theme: "Dark",
    language: "English"
  },

  isPremiumUser: true,
  experience: "Fresher"
};

const divider = "------------------------------------"
//extract
const {
           profile:{
            fullName ,
            age,
            email
        },
    address:{
        city ,
        state,
        country
    },
    skills:[
        html,
        css,
        js
    ],
    hobbies:[
        firstHobby,
        secondHobby,
        thirdHobby
    ],
    education: {
    college,
    degree,
    graduationYear
  },
    ...remainingProperties
} = user


//display
const output = `
${divider}
User Profile Explorer
 ${divider}

👤 Basic Information

Name: ${fullName}
Age: ${age}
Email: ${email}

 ${divider}

🏠 Address

City: ${city}
State: ${state}
Country: ${country}

${divider}

🎯 Skills

✔ ${html}
✔ ${css}
✔ ${js}

${divider}

❤️ Hobbies

${secondHobby}
${firstHobby}
${thirdHobby}

${divider}

🎓 Education

College: ${college}
Degree: ${degree}
Graduation Year: ${graduationYear}

${divider}

📊 Summary

Remaining Details:

${JSON.stringify(remainingProperties,null,2)}
`
console.log(output)