function printEquality(a, b) {
  // a === b 厳格的な等価性
  console.log(a === b);

  // a == b 抽象的な等価性
  console.log(a == b);
}

let a = "1";
let b = 1;

let c = true;

console.log(b === Number(c));
printEquality(b, c);

let e = "";
let f = 0;

printEquality(e, f);
