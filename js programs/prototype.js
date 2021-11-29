let x = new Object();

console.log(Object.getPrototypeOf(x)); //{}

let obj1 = {};
console.log(Object.getPrototypeOf(obj1)); //{}

let logicAlbums = [
  "Bobby Tarantino",
  "The Incredible True Story",
  "Supermarket",
  "Under Pressure",
];

Array.prototype.eachAlbum = function (callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); // currentValue, index, array
  }
};

logicAlbums.eachAlbum(function (word) {
  console.log(word);
  // Bobby Tarantino,
  // The Incredible True Story,
  // Supermarket,
  // Under Pressure;
});

Array.prototype.ourMap = function (callback) {
  let arr = []; // since, we need to return an array
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)); // pushing currentValue, index, array
  }
  return arr; // finally returning the array
};

Array.prototype.filterAlbums = function (callback, context) {
  arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
