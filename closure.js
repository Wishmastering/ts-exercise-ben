function outerFunction() {
  let outerVariable = "outer execution";

  return function innerFunction() {
    console.log(outerVariable);
    return "Undo it command test";
  };
}

let closure = outerFunction();

console.log(closure());
