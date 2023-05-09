console.log("Function declaration........");

function calcRectArea(width, height) {
    return width * height;
  }
  
  console.log(calcRectArea(5, 6));

  console.log("Function expression aka Anonymous Function..............")

  const area=function(width , height){
    return width * height;
  }
  console.log(area(2,3));

  console.log("Immediately invoked function expression...............");

  (function () {
    console.log("How are you");
  })();

  console.log("self executing anonymous function (without name itself) ..............");

  (() => {
    console.log("I'm good");
  })();

  console.log("Getter Function...............")
  const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      return this.log[this.log.length - 1];
    }
  };
  
  console.log(obj.latest);

  console.log("Arrow Function with No Argument.............")

  let greet = () => console.log('Hello');
    greet(); 

    console.log("Arrow Function with One Argument..............")
 let greet1 = x => (x+1)//console.log(x);
console.log(greet1(1)); 

console.log("Arrow Function as an Expression..........")
let age = 5;

let welcome = (age < 18) ?() => console.log('Baby') :() => console.log('Adult');

welcome(); 

console.log("Multiline Arrow Functions...........")

let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); 

console.log("this with Arrow Function..............")

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();


