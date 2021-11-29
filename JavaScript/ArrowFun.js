let log = console.log;

// log("this", this); //{}

function normalFun() {
  log("this inside normal function", this); //Object [global]
}

// normalFun();

const arrowFun = () => {
  log("this inside arrow function", this); //{}
};

// arrowFun();

const myObject = {
  myMethod: () => {
    log(this); //{}
  },
};

// myObject.myMethod();

const myObj = { ...myObject };


function callbackfun(data){
log("data", data)
}

const asyncawaitfun = async () => {
    
}