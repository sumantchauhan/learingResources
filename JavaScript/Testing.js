// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

const xyz = [1, 2, 3, 4, 5];

// xyz = [3, 4, 5, 6];  //TypeError: Assignment to constant variable
// xyz.push(10);
// console.log(xyz);

const findSecondLargest = (array) => {
  let max = 0;
  let secondMax = 0;
  array.forEach((item) => {
    if (item > max) {
      secondMax = max;
      max = item;
    } else if (item !== max && item > secondMax) {
      secondMax = item;
    }
  });
  return secondMax;
};

let result = findSecondLargest([10, 20, 5, 2, 90, 8, 3, 35]);
console.log([10, 20, 5, 2, 90, 8, 3, 35].sort((a, b) => b - a)[1]);
console.log("Second Largest Element", result);

const arrays1 = [1, 2, 10, 5, 20, 8, 3];
const arrays2 = [1, 2, 30, 10, 5, 35];

const findFirstMissing = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      console.log(arr1[i]);
      break;
    }
  }
};

findFirstMissing(arrays1, arrays2);
