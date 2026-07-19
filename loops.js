// Create a for loop to print “Hi John” 5 times in the console.


for (let i = 0; i < 5; i++) {
    console.log("Hi John");
}

// Use While loop to print 0-10 in the console.
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
} 

// Find the Square Number from 1-10 


for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}


// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Use a loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log("The sum of all numbers is " + sum);

// Find Odd number between two numbers m,n 
function findOddNumbers(m, n) {
    for (let i = m; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
findOddNumbers(1, 20); 

// Define the Array fruit and add your four favourite fruits and print its value only 

const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
for (let fruit of fruits) {
    console.log(fruit);
}

// Define the string “learn JavaScript” and separate every letter using comma (,)
const str = "learn JavaScript";
console.log(str.split('').join(','));


// Write a loop that makes seven calls to console.log to output the following triangle:
let output = "";
for (let i = 1; i <= 7; i++) {
    output += "#";
    console.log(output);
}


// Iterate through all numbers from 1 to 45. Print the following:

for (let i = 1; i <= 45; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("PuppyPet");
    } else if (i % 3 === 0) {
        console.log("Puppy");
    } else if (i % 5 === 0) {
        console.log("Pet");
    } else {
        console.log(i);
    }
}