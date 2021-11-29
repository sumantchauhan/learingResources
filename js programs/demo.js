let log = console.log;

const maxCharacter = (str) => {
  let reptCharsCount = 0;
  let ele = "";
  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    reptCharsCount = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        reptCharsCount++;
      }
    }

    if (reptCharsCount > maxCount) {
      ele = str[i];
      maxCount = reptCharsCount;
    }
  }
  // console.log(maxCount)
  return ele;
};

let result = maxCharacter(
  "asdefdfdsdfseddssdfsdnknmwlqssssssssssssssssssssssweeeeeeeeeeeeeeeee"
);
// console.log("result---->",result);

// let fruit = {name: 'apple'};
// let fruitbear = {name: 'apple'};

// console.log(fruit === fruitbear); //false

// fruit.name = "mango";

// console.log(fruit === fruitbear); // false
// console.log(fruit, fruitbear); //{ name: 'mango' } { name: 'apple' }

// fruitbear.name = "banana";

// console.log(fruit === fruitbear); // false

// console.log(fruit, fruitbear); //{ name: 'apple' } { name: 'banana' }

let fruit = { name: "apple" };
let fruitbear = fruit;
// console.log(fruit === fruitbear); //true
// fruit.name = "mango";
// console.log(fruit === fruitbear); //true

fruitbear.name = "banana";
// console.log(fruit === fruitbear); //true
// console.log(fruit, fruitbear); //{ name: 'banana' } { name: 'banana' }

const countChars = (str) => {
  let obj = {};
  for (let s of str)
    if (!obj[s]) obj[s] = 1;
    else obj[s] = obj[s] + 1;
  return obj;
};

let res = countChars("Hello everyone dskkjl kdsjkjkds kdsjlkjsd H h");
// console.log("res",res);

let JSON_START = /^\[|^\{(?!\{)/;
let JSON_ENDS = {
  "[": /]$/,
  "{": /}$/,
};

function isJsonLike(item) {
  item = typeof item !== "string" ? JSON.stringify(item) : item;

  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  if (typeof item === "object" && item !== null) {
    return true;
  }

  return false;
}

let jsonText = "{'sdlks':''}";
const jsonResult = isJsonLike(jsonText);
console.log("jsonResult", jsonResult);

// let aaaa = 10;
// let bbbb = aaaa;

// console.log("aaaa", aaaa, ": bbbb", bbbb); //aaaa 10 : bbbb 10

// bbbb = 15;

// console.log("After b modified", "aaaa", aaaa, ": bbbb", bbbb); //After b modified aaaa 10 : bbbb 15

// const xyz = { name: "AAAAAAA" };
// let xyz1 = xyz;

// console.log("xyz", xyz, ": xyz1", xyz1); //xyz { name: 'AAAAAAA' } : xyz1 { name: 'AAAAAAA' }

// xyz1.name = "BBBBBBB";

// console.log("After xyz1 modified", "xyz", xyz, ": xyz1", xyz1); //After xyz1 modified xyz { name: 'BBBBBBB' } : xyz1 { name: 'BBBBBBB' }

let employeeDetailsOriginal = {
  name: "Manjula",
  age: 25,
  Profession: "Software Engineer",
};

let employeeDetailsDuplicate = employeeDetailsOriginal; //Shallow copy!

// log(
//   "employeeDetailsOriginal",
//   employeeDetailsOriginal,
//   ": employeeDetailsDuplicate",
//   employeeDetailsDuplicate
// );

// employeeDetailsDuplicate.name = "Sumant";

// log(
//   "employeeDetailsOriginal",
//   employeeDetailsOriginal,
//   ": employeeDetailsDuplicate",
//   employeeDetailsDuplicate
// );

let employeeDetailsDuplicate1 = {
  name: employeeDetailsOriginal.name,
  age: employeeDetailsOriginal.age,
  Profession: employeeDetailsOriginal.Profession,
}; //Deep copy!

// log(
//   "employeeDetailsOriginal",
//   employeeDetailsOriginal,
//   "employeeDetailsDuplicate1",
//   employeeDetailsDuplicate1
// );

employeeDetailsDuplicate1.name = "Sumant";

// log(
//   "employeeDetailsOriginal",
//   employeeDetailsOriginal,
//   "employeeDetailsDuplicate1",
//   employeeDetailsDuplicate1
// );
//employeeDetailsOriginal { name: 'Manjula', age: 25, Profession: 'Software Engineer' } employeeDetailsDuplicate1 { name: 'Sumant', age: 25, Profession: 'Software Engineer' }

function myFunction() {
  log("this in regular function", this);
}

myFunction();

const myArrow = () => {
  log("this in arrow function", this);
};

myArrow();
