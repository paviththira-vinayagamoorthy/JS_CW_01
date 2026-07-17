//  question 1
let text = "There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool.";


let count = text.split("and").length - 1;

console.log(count); 

// question 2
const now = new Date();
console.log("Year:", now.getFullYear());           
console.log("Month (number):", now.getMonth() + 1); 
console.log("Date:", now.getDate());               
console.log("Day (number):", now.getDay() +1);  


// question 3
const x1 = 2, y1 = 2, x2 = 6, y2 = 10;
const slope = (y2 - y1) / (x2 - x1);
console.log(slope); 

// question 4
let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");
console.log(`Your weekly earning is ${hours * rate}`);

// question 5
let x = 5;
let y = 6;
let z = 7;

let s = (x + y + z) / 2;
let area = Math.sqrt(s * (s - x) * (s - y) * (s - z));

console.log(area);


// question 6
let c = 60;
let f = (c * 9/5) + 32;
console.log(c + "°C is " + f + " °F");

let f2 = 45;
let c2 = (f2 - 32) * 5/9;
console.log(f2 + "°F is " + c2 + "°C");

// question 7
alert(window.location.href);

// question 8
let name = "script.js";
let extension = name.split('.').pop();
console.log(extension);


// question 9
let str = "EDUCATION IS IMPORTANT";
let vowels = str.match(/[aeiou]/gi);
console.log((vowels ? vowels.length : 0));

// question 10
let num = 21; 

if (num % 3 === 0 || num % 7 === 0) {
    console.log("Yes");
} else {
    console.log("No");
}