class bankAccount {

  constructor(firstName, lastName, initialAmt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.initialAmt = initialAmt;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("Please enter a valid first name");
    }
  }

  set lastName(newlastName) {
    if (typeof newlastName === "string" && newlastName.length > 0) {
      this._lastName = newlastName;
    } else {
      console.error("Please enter a valid last name");
    }
  }

  set initialAmt(newInitialAmt) {
    if (typeof newInitialAmt === "number") {
      this._initialAmt = newInitialAmt;
    } else {
      console.error("Please Enter A Valid Amount");
    }
  }

  get firstName() {
    return this._firstName;
  }

   get lastName() {
    return this._lastName;
  }

  get initialAmt() {
    return this._initialAmt;
  }
}

const person1 = new bankAccount("Miguel", "Mansilla", 180000);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.initialAmt);