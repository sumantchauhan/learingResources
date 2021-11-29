let log = console.log;

let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

lizard.__proto__ = dragon;
lizard.fight();

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

log("Can a GFG User talk: " + GFGuser.talk);

// Method of person
log("Can a GFG User fly: " + GFGuser.Canfly());

// Property of GFGuser
log("Can a GFG User code: " + GFGuser.CanCode);

// Method of GFGuser
log("Can a GFG User cook: " + GFGuser.CanCook());
