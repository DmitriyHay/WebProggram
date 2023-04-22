class Secretary {
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
  
  let secretary = new Secretary("Дмитро", "Курінний", 19);
  
  console.log("FName: " + secretary.firstName);
  console.log("LName: " + secretary.lastName);
  console.log("Age: " + secretary.age);