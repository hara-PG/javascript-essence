function Person(name, age) {
  this.name = name;
  this.age = age;
}

const bob = new Person("Bob", 18);
const tom = new Person("Tom", 33);
const sun = new Person("Sun", 20);

function Test(subject, score) {
  this.subject = subject;
  this.score = score;
}

const a = new Test("国語", 50);
const b = new Test("数学", 60);
const c = new Test("社会", 55);
