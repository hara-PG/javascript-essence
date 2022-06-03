// "use strict";
// const obj = { prop: 0 };

const obj = {};
Object.defineProperty(obj, "prop", {
  configerable: true,
  value: 0,
  writable: true,
});

delete obj.prop;

// obj.prop = 1;
console.log(obj.prop);

// const desctiptor = Object.getOwnPropertyDescriptor(obj, "prop");

// console.log(desctiptor);
