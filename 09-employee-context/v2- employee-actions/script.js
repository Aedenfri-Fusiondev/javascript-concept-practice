const employee1 = {
  firstName: "John",
  lastName: "Doe",
  role: "System Designer",
  company: "Google",
};

const employee2 = {
  firstName: "Ellie",
  lastName: "Shaa",
  role: "Backend Developer",
  company: "Capgemini",
};

const employee3 = {
  firstName: "Daren",
  lastName: "Rick",
  role: "Cloud Architect",
  company: "Salesforce",
};

const introducer = {
  introduce(greeting, ending) {
    return `${greeting}! I'm ${this.firstName} ${this.lastName}. I'm a ${this.role} at ${this.company}${ending}`;
  },

  promote(greeting, newRole) {
    this.role = newRole;
    return `${greeting} ${this.firstName}!\nYou have been promoted to ${newRole}.`;
  },

  switchCompany(greeting, pronoun, newCompany, newRole) {
    const oldCompany = this.company;
    this.company = newCompany;
    this.role = newRole;
    return `${greeting} ${this.firstName}!\n${pronoun} got promoted at ${oldCompany}. Now ${pronoun.toLowerCase()} is working at ${newCompany} as a ${newRole}.`;
  },
};

const introduceDaren = introducer.introduce.bind(employee3, "Hello", ".");

console.log(introducer.introduce.call(employee1, "Hello", "."));
console.log(introducer.introduce.apply(employee2, ["Hello", "."]));
console.log(introduceDaren());

console.log(introducer.promote.call(employee3, "Kudos", "Senior Cloud Architect"));
console.log(introducer.switchCompany.call(employee2, "Hey", "She", "Azure", "Principal Cloud Engineer"));