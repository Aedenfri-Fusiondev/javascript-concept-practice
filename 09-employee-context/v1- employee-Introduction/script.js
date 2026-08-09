const employee1 ={
firstName : "John",
lastName : "Doe",
role : "System designer",
company : "Google"
};

const employee2 ={
firstName : "Ellie",
lastName : "Shaa",
role : "Backend Developer",
company : "Capgemini"
};

const employee3 ={
firstName : "Daren",
lastName : "Rick",
role : "Cloud Architect",
company : "Salesforce"
};

const introducer = {
  introduce(greeting ,ending) {   
    return `${greeting}!  I'm ${this.firstName} ${this.lastName}. I'm a ${this.role} at ${this.company} ${ending}`
  }
}
const introduceDaren = introducer.introduce.bind(employee3 , "Hello" , "." )

console.log(introducer.introduce.call(employee1 ,"Hello" , "."))
console.log(introducer.introduce.apply(employee2,["Hello" , "."]))
console.log(introduceDaren())
