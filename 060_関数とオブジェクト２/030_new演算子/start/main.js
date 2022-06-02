function F(a, b) {
  this.a = a;
  this.b = b;
  return {};
}

F.prototype.c = function () {};
function newOpe(C, ...args) {
  console.log(args);
}
const instance = newOpe(F, 1, 2);
console.log(instance);
