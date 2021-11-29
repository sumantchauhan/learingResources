const occurrences = [
  "Audi",
  "Audi",
  "Benz",
  "Benz",
  "Tesla",
  "BMW",
  "Toyota",
  "BMW",
].reduce((acc, curr) => {
  return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
}, {});

// console.log(occurrences);

// console.log(x);

// const x;

// sum(1, 2);  //TypeError: sum is not a function

var sum = (a, b) => a + b;

// sum1(1, 2);   //3
function sum1(a, b) {
  console.log(a + b);
}

const obj1 = {
  name: "Sumant",
  arrowFun1: () => {
    console.log(this); //{}
  },
  norFun1: function () {
    console.log("norFun1", this); //norFun1 {
    // name: 'Sumant',
    // arrowFun1: [Function: arrowFun1],
    // norFun1: [Function: norFun1],
    // complexFun1: [Function: complexFun1],
    // complexFun2: [Function: complexFun2]
    // }
  },
  complexFun1: () => {
    console.log(this); //{}
    const arrowFun2 = () => {
      console.log(this); //{}
    };
    function norFun2() {
      console.log(this); //Object [global]
    }
    arrowFun2();
    norFun2();
  },
  complexFun2: function () {
    console.log(this);
    const arrowFun3 = () => {
      console.log(this);
    };
    function norFun3() {
      console.log(this);
    }
    arrowFun3();
    norFun3();
  },
};

// obj1.complexFun2();

let logicAlbums = [
  "Bobby Tarantino",
  "The Incredible True Story",
  "Supermarket",
  "Under Pressure",
];

Array.prototype.eachAlbum = function (callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  console.log("this", this);
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this); // currentValue, index, array
  }
};

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

logicAlbums.customForEach((el) => console.log(el));
