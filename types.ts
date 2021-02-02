// Number
let num1: number = 5;
console.log(num1);

// Boolean
let isTrue: boolean = true;
console.log(isTrue);

// String
let country: string = "Spain";
console.log(country);

// Array
let arrayNum: number[] = [1,2,3];

for(let i=0; i<arrayNum.length;i++)
{
    console.log("Array is: " + arrayNum[i]);
}

// Any
let notSure: any = 5;
console.log(notSure);

let listAny: any[] = [2,true,"test"];

for(let i=0; i<listAny.length;i++)
{
    console.log("Array is: " + listAny[i]);
}