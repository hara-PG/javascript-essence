const person = {
  name: "Tom",
  hello: function () {
    console.log("hello " + this.name);
  },
};

person.hello();

const animal = {
  name: "さくら",
  type: function () {
    console.log("柴犬の" + this.name);
  },
};

animal.type();
