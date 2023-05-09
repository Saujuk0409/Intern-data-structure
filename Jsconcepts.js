// Rest parameters

// function suml(...args){
//     let sum=0;
//     for(let i of args) 
//         sum+=i;
//     return sum
// }
// console.log(suml(1,2,3,4,5))

// arguments variable 

// function showName()
// {
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }
// showName("julius","caesar");
// showName(1,2,3,4,5);

//  Spread syntax ---> changes array into a list of arguments 

// let arr1=[3,5,6];
// let arr2=[8,9,15];
// let mergelist=[1,...arr1,2,...arr2];
// console.log(mergelist);

// Promise 
// let promise = new Promise(
//     function(resolve,reject)
//     {
//         console.log("Hi");
//         // setTimeout(() => reject(new Error("Whoops")),1000)
//         setTimeout(()=> resolve("done!"),1000)
//     }
// ) ;

// promise.then(
//     result=>console.log(result),
//     error=>console.log(error)
// );

var x;
while(x<=5)
{
    x+=1;
    if(x==3)
    {
        continue;
    }
    console.log(x);
}
console.log("...end")
