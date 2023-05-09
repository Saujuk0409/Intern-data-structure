function Employee()
{
this.empName="empName";
if(this.constructor === Employee){
throw new Error("You cannot create an instance of     Abstract Class");
}
};

Employee.prototype.display=function()
{
return "Employee name is: "+this.empName;
}

function Manager(fullName)
{
this.empName=fullName;
}

Manager.prototype=Object.create(Employee.prototype);
var mang=new Manager("Aniket Davda");
console.log(mang.display());