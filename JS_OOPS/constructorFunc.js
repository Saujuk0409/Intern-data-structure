// constructor function
function Person (person_name, person_age, person_gender) {

     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
     console.log(this.name,this.age,this.gender);
     this.greet = function () {
         return ("Hi" + " " + this.name+"I am "+this.age+" And I am a "+this.gender);
     }
 }
 
 
 // creating objects
 const person1 = new Person('John', 23, 'male');
 const person2 = new Person('Sam', 25, 'female');
 
 console.log(person1.greet())
 console.log(person1)
 person1.name="ovi",
 
 // accessing properties
 console.log(person1);
 console.log(person2.name); 
 