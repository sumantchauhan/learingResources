const name = "Sunny";

function importantPerson() {
  console.log(this.name);
}

const obj1 = {
  name: "Bunny",
  importantPerson: importantPerson,
};

const obj2 = {
  name: "Jacob",
  importantPerson: importantPerson,
};

// obj1.importantPerson();

const a = function () {
  console.log(this);
  const b = function () {
    console.log(this);
    const c = function () {};
    c.hi();
  };
  b();
};

// a();

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at ", array[i]);
  }, 3000);
}
