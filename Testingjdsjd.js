function countDuplicates(n, arr) {
  var count = 0;
  arr.sort();
  for (var i = 0; i < n; ) {
    if (arr[i] === arr[i + 1]) {
      count++;
      i = i + 2;
    } else {
      i++;
    }
  }
  return count;
}
// console.log(countDuplicates(9, [10, 20, 20, 10, 10, 30, 20, 50, 10, 20]));

// a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  };
};

// returned function from memoizedAdd
const newAdd = memoizedAdd();
// console.log(newAdd(9)); // calculated
// console.log(newAdd(1)); // cached

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1 * 1000);
// }

let animal = {
  eats: true,
  run: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;
// console.log(rabbit, rabbit.eats); //{ jumps: true } true

const protoFun = () => {};

// console.log(protoFun);


let k=1;
if(k==1){
  const foo = () => {
    k += typeof foo;
  }
  foo();
}

// console.log(k)  // ifunction
