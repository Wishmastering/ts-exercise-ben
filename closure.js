function outerFunction() {
  let outerVariable = "outer execution";

  return function innerFunction() {
    console.log(outerVariable);
    return true;
  };
}

let closure = outerFunction();

console.log(closure());
