// 1. Function to print full name
function printFullName() {
  console.log("Paviththira Vinayagamoorthy");
}
printFullName();

// 2. Function to return full name with parameters
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`; 
}
console.log(getFullName("Paviththira", "Vinayagamoorthy"));

// 3. Function to return sum of two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(5, 10)); 

// 4. Area of a rectangle
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(10, 5));


// perimeter
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}
console.log(perimeterOfRectangle(20, 3));

// volume
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}
console.log(volumeOfRectPrism(12, 10, 5));

// area of a circle
function areaOfCircle(r) {
    return Math.PI * r * r;
}
console.log(areaOfCircle(5));
// circumference
function circumOfCircle(r) {
    return 2 * Math.PI * r;
}
console.log(circumOfCircle(21));


// celcius to F
function fahrenhei(oC) {
    return (oC * 9/5) + 32;
}



// 10. BMI Calculator 
function calculateBMI(weightKg, heightM) {
  const bmi = weightKg / (heightM * heightM);
  
  if (bmi < 18.5) {
    return `BMI is ${bmi.toFixed(1)}: Underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `BMI is ${bmi.toFixed(1)}: Normal weight`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    return `BMI is ${bmi.toFixed(1)}: Overweight`;
  } else {
    return `BMI is ${bmi.toFixed(1)}: Obese`;
  }
}
console.log(calculateBMI(60, 1.65)); // 60kg, 1.65m