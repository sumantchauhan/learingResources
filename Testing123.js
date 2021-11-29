const stringFormat = (string) => {
  let temp = string.split("_");
  for (let i = 1; i < temp.length; i++) {
    temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
  }
  //   temp.join("");
  console.log("temp", temp.join(""));
};

stringFormat("i_am_sumant");

function isUpperCase(str) {
  return str === str.toUpperCase();
}

// console.log(isUpperCase("hellO"));

const findArrMissing = (arr) => {
  for (let i = 1; i < arr.length + 1; i++) {
    if (arr.includes(i)) {
    } else {
      console.log("Missing Number", i);
    }
  }
};

// findArrMissing([2, 5, 3, 7, 4, 1, 6]);

const arr1 = [3, 6, 7, 9, 1, 5, 2, 8];

// console.log(arr1.find((x, i) => arr1[i + 1] - x > 1) + 1);

let animals = new Set();

animals.add("🐷");
animals.add("🐼");
animals.add("🐢");
animals.add("🐿");
// console.log(animals.size); // 4
animals.add("🐼");
// console.log(animals.size); // 4

// console.log(animals.has("🐷")); // true
animals.delete("🐷");
// console.log(animals.has("🐷")); // false

animals.forEach((animal) => {
  //   console.log(`Hey ${animal}!`);
});

// Hey 🐼!
// Hey 🐢!
// Hey 🐿!

animals.clear();
// console.log(animals.size); // 0

const animal1 = {
  name: "Cow",
};

// animal1.add("XYZ");   //Error

// let myAnimals = new Set(["🐷", "🐢", "🐷", "🐷"]);
// console.log(myAnimals.size); // 2
// myAnimals.add(["🐨", "🐑"]);
// console.log(myAnimals.size); // 3
// myAnimals.add({ name: "Rud", type: "🐢" });
// console.log(myAnimals.size); // 4
// console.log("myAnimals", myAnimals);

// object person
let person = {
  talk: true,
  Canfly() {
    return "Sorry, Can't fly";
  },
};
// Object GFGuser
let GFGuser = {
  CanCode: true,
  CanCook() {
    return "Can't say";
  },

  //  Inheriting the properties and methods of person
  __proto__: person,
};

// Printing on console
// Property of person
console.log("Can a GFG User talk: " + GFGuser.talk);

// Method of person
console.log("Can a GFG User fly: " + GFGuser.Canfly());

// Property of GFGuser
console.log("Can a GFG User code: " + GFGuser.CanCode);

// Method of GFGuser
console.log("Can a GFG User cook: " + GFGuser.CanCook());
