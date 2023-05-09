// 
class Animal
  {  
    speak() {  
      console.log("Animals have different sounds"); }  
  }  
class Cat extends Animal
  {  
speak(){
console.log("Cat says Meow Meow");}
  }  
class Dog extends Animal
  {  
speak(){
console.log("Dog say Woof Woof");}
  }  
var x=[new Cat(), new Dog()]  
x.forEach(function(info) {  
info.speak(); });