class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName () {
    return `The student fullname is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if(this.tardies >= 3) {
      return 'YOU ARE EXPELLED!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}

bob = new Student('Bob', 'Dylan', 2);
tom = new Student('Tom', 'Hanks', 3);