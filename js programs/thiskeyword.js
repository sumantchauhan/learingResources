let log = console.log;

// log(this);  //{}

function foo() {
  log(this); //Object [global]
}

// foo();

function foo1() {
  function bar() {
    log(this); //Object [global] {
  }
  bar();
}

// foo1();

const foo2 = () => {
  log(this); //{}
};

// foo2();

const foo3 = () => {
  const bar1 = () => {
    log(this); //{}
  };
  bar1();
};

// foo3();

const foo4 = () => {
  function bar2() {
    log(this); //Object [global] {
  }
  bar2();
};

// foo4();

function foo5() {
  const bar = () => {
    log(this); //Object [global] {
  };
  bar();
}

// foo5();

const obj = {
  firstName: "Sumant",
  age: 24,
  foo: function () {
    log(this); //{ firstName: 'Sumant', age: 24, foo: [Function: foo],foo1: [Function: foo1],foo2: [Function: foo2] }
  },
  foo1: () => {
    log(this); //{}
  },
  foo2: function () {
    // log(this);
    function bar() {
      log(this); //Object [global] {
    }
    const bar2 = () => {
      log(this); //{ firstName: 'Sumant', age: 24, foo: [Function: foo],foo1: [Function: foo1],foo2: [Function: foo2] }
    };
    // bar();
    // bar2();
  },
  diffFun: () => {
    // log(this); //{}
    function foo() {
      log(this); //Object [global] {
    }
    const foo1 = () => {
      log(this); //{}
    };
    // foo();
    // foo1();
  },
  veryDiffFun1: function () {
    function foo() {
      //   log(this); //Object [global] {
      function bar() {
        console.log(this); //Object [global] {
      }
      const bar1 = () => {
        // log(this); //Object [global] {
        function foobar() {
          log(this); //Object [global]
        }
        const foobar1 = () => {
          log(this); //Object [global] {
        };
        // foobar();
        foobar1();
      };
      //   bar();
      bar1();
    }
    foo();
  },
  veryDiffFun2: () => {
    log(this); //{}
    function foo() {
      log(this); //Object [global]
      function bar() {
        log(this); //Object [global]
        function foobar() {
          log(this); //Object [global]
        }
        foobar();
      }
      bar();
    }

    const foo1 = () => {
      console.log(this); //{}
      const bar = () => {
        log(this); //{}
      };
      function bar1() {
        log(this); //Object [global]
      }
      const bar2 = () => {
        function foobar() {
          log(this); //Object [global] {
        }
        const foobar1 = () => {
          //   log(this); //{}
        };
        // foobar();
        // foobar1();
      };
      //   bar();
      //   bar1();
      bar2();
    };
    // foo();
    foo1();
  },
};

// obj.veryDiffFun2();

(function iff() {
  // console.log("Iffi", this);  //Iffi Object [global] {
  const arrowFun = () => {
    console.log(this); //Object [global] {
  };
  // arrowFun();
  function norFun() {
    // console.log(this); //Object [global]
    function innerNorFun() {
      console.log(this); //Object [global]
    }
    // innerNorFun();
  }
  norFun();
})();

hoisting1();

function hoisting1() {
  console.log("Hello"); //Hello
}

// hoistingArrow();  //TypeError: hoistingArrow is not a function
var hoistingArrow = () => {
  console.log("Hello Arrow");
};

// hoistingArrow1(); //ReferenceError: Cannot access 'hoistingArrow1' before initialization
let hoistingArrow1 = () => {
  console.log("Hello Arrow");
};

// hoistingArrow2(); //ReferenceError: Cannot access 'hoistingArrow2' before initialization
const hoistingArrow2 = () => {
  console.log("Hello Arrow");
};

// hoisting2(); //TypeError: hoisting2 is not a function
var hoisting2 = function () {
  console.log("Hello Hoisting2");
};

// hoisting3(); //ReferenceError: Cannot access 'hoisting2' before initialization
let hoisting3 = function () {
  console.log("Hello Hoisting3");
};

// hoisting4(); //ReferenceError: Cannot access 'hoisting2' before initialization
const hoisting4 = function () {
  console.log("Hello Hoisting4");
};
