function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
let res = sum(1)(2)(3);
console.log(res);
