function timeconverter()
{
var date = new Date();
//let p=date.toLocaleString('en-GB');
let day=date.getDay();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds()
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let Today=days[day];

let dateString =Today +" "+hours +" : " +minutes +" : " +seconds;
if(hours>12)
{
    let p=hours-12
    console.log(Today+" "+p+"PM "+":"+minutes+": "+seconds)
}
else{
    console.log(Today+" "+hours+": "+minutes+": "+seconds)
}
console.log(dateString);
}
timeconverter()