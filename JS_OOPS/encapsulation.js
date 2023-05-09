var student = function () {
    var name = "Alexander";
    var expression = new RegExp(/\d+/);
      return {
        setName: function (value) {
          if (expression.test(value)) {
            console.log("Invalid Name is entered");
          }
          else {
            name = value;
          }
        },
        getName: function () {
          return name;
        }
      };
  }();

  console.log(student.getName());

student.setName("Max");

console.log(student.getName());

student.setName(76);

student.name = 76;

console.log(student.getName());