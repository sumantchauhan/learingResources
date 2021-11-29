// console.log("teddy", teddy); //teddy undefined

var teddy = "bear";

// console.log(sing());  //Ohhh la la la ...
// undefined

// function declaration
function sing() {
  console.log("Ohhh la la la...");
}

// sign2(); //TypeError: sign2 is not a function
// console.log(sign2);  //undefined

// function expresion
var sign2 = function () {
  console.log("uhhh la la la...");
};

// sign2();  //uhhh la la la...

var favourateFood = "Grapes";

var foodThoughts = function () {
  console.log("Original favourate food:" + favourateFood); //Original favourate food:undefined
  var favourateFood = "Sushi";
  console.log("New favourate food:" + favourateFood); //New favourate food:Sushi
};

// foodThoughts();
