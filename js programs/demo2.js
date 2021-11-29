const calc = () => {
  let res = 20;
  return res;
};

// console.log("Calc", calc());

function foo(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let res = foo(1)(2)(3);
// console.log(res); //6

const countArrayPairs = (arr) => {
  let counter = 0;
  let count = 0;
  arr.sort((a, b) => a - b);
  // arr.reduce((a, c) => {
  //   if (a === c) {
  //     // counter = counter + 1;
  //     ++counter;
  //     return c;
  //   } else {
  //     return c;
  //   }
  // });
  // arr.reduce((acc, cur) => {
  //   return acc === cur ? ++counter : cur;
  // });
  // console.log("Counter", counter);
};

// countArrayPairs([1, 2, 10, 2, 5, 30, 20, 20, 30, 30]);

function countPairs(arr) {
  let pairs = 0;
  const obj = {};
  arr.forEach((i) => {
    if (obj[i]) {
      pairs += 1;
      obj[i] = 0;
    } else {
      obj[i] = 1;
    }
  });
  console.log("Pairs", pairs);
  return pairs;
}

// countPairs([1, 2, 10, 2, 5, 30, 20, 20, 30, 30, 20]);

const arrayOccurence = (array) => {
  // let result = array.reduce(function (acc, curr) {
  //   return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  // }, {});

  // console.log(result);

  let tempObj = {};
  array.forEach((item) =>
    tempObj[item] ? ++tempObj[item] : (tempObj[item] = 1)
  );
  console.log(tempObj);
};

// arrayOccurence([1, 2, 10, 2, 5, 30, 20, 10, 20, 20, 20]);

const fetchingPost = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("Data", data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

// fetchingPost();

function reverse3(array) {
  return array.map((element, idx, arr) => arr[arr.length - 1 - idx]);
}

const secondLargest = (arr) => {
  let max1st = arr[0];
  let max2nd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1st) {
      max2nd = max1st;
      max1st = arr[i];
    } else if (arr[i] > max2nd && arr[i] !== max1st) {
      max2nd = arr[i];
    }
  }
  console.log(max2nd);
  return max2nd;
};

// secondLargest([5, 4, 3, 2, 1, 9, 8, 20, 19, 6]);

const secondLargestEle = (arr) => {
  let first = arr[0];
  let second = 0;
  arr.reduce((acc, cur) => {
    if (cur > first) {
      second = first;
      first = cur;
      return cur;
    } else if (cur > second && cur !== first) {
      second = cur;
      return cur;
    }
  });
  console.log(second);
};

// secondLargestEle([24, 5, 4, 3, 2, 1, 9, 8, 20, 19, 6, 25]);

const fact = (num) => {
  if (num == 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
};

// console.log(fact(5)); //120

const isPrime = (num) => {
  let i,
    flag = true;
  if (num < 2) {
    flag = false;
  }
  for (i = 2; i <= num - 1; i++)
    if (num % i == 0) {
      flag = false;
      break;
    }
  if (flag == true) console.log(num + " is prime");
  else console.log(num + " is not prime");
};

// isPrime(10);

function validatePalin(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      console.log(string, "is not a palindrome");
      break;
    } else {
      console.log(string, "is a palindrome");
      break;
    }
  }
}

validatePalin("madvavmx");

const fibnoki = (num) => {
  let i = 0;
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  console.log(fib);
};

fibnoki(10);
