// console.log("Var a", a); //Var undefined
var a;

// console.log("var b", b);  //ReferenceError: b is not defined

// console.log("var c", c); //var c undefined
var c = 5;

d = 10;
// console.log("var d", d); //10
var d;

// console.log("let e", e); //ReferenceError: Cannot access 'e' before initialization
let e;

// f = 10;  //ReferenceError: Cannot access 'f' before initialization
// console.log("let f", f); //ReferenceError: Cannot access 'f' before initialization
let f;

// console.log("let g", g); //ReferenceError: Cannot access 'f' before initialization
let g = 20;

let h = 30;
// console.log(h); //30

let object = {
  name: "AAAAAAA",
  age: 25,
};

let obj1 = { ...object };
// console.log("object", object); //object { name: 'AAAAAAA', age: 25 }
// console.log("obj1", obj1); //obj1 { name: 'AAAAAAA', age: 25 }

obj1.add = "Delhi";
obj1.name = "BBBBB";
// console.log("object", object); //object { name: 'AAAAAAA', age: 25 }
// console.log("obj1", obj1); //obj1 { name: 'BBBBB', age: 25, add: 'Delhi' }

let object1 = {
  name: "AAAAAAA",
  age: 25,
};

let obj2 = object1;
// console.log("object1", object1); //object1 { name: 'AAAAAAA', age: 25 }
// console.log("obj2", obj2); //obj2 { name: 'AAAAAAA', age: 25, }

obj2.address = "Bangalore";

// console.log("object1", object1); //object1 { name: 'AAAAAAA', age: 25, address: 'Bangalore' }
// console.log("obj2", obj2); //obj2 { name: 'AAAAAAA', age: 25, address: 'Bangalore' }

let object2 = {
  name: "AAAAAAA",
  age: 25,
};

let obj3 = Object.assign({}, object2);

obj3.address = "Mumbai";
obj3.name = "BBBBBBB";

console.log("object2", object2); //object2 { name: 'AAAAAAA', age: 25 }
console.log("obj3", obj3); //obj3 { name: 'BBBBBBB', age: 25, address: 'Mumbai' }
