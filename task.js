// Task - 1

var fruits = ["Apple", "Banana", "Orange"];

// banana position dicler
var BananaPosition = fruits.indexOf("Banana")
// console.log(BananaPosition);

// Banana Replace Mango
fruits[1] = "Mango";
// console.log(fruits);

// remove orange
var AllFruits = fruits.pop();
// console.log(fruits);

// add Watermelon 
var AllFruits = fruits.push("Watermelon");
// console.log(fruits);




// Task - 2 

// all marks
var MyScore = 85;
var TomScore = 66;
var JaneScore = 95;
var PeterScore = 56;
var JohnScore = 40;

// all grade marks

// my grades

if (MyScore >= 80) {
    console.log("'A'Grade");
}
else if (MyScore >= 60) {
    console.log("'B'Grade");
}
else if (MyScore >= 50) {
    console.log("'C'Grade");
}
else if (MyScore >= 40) {
    console.log("'D'Grade");
}
else {
    console.log("'F'Grade");
}


// Tom grades

if (TomScore >= 80) {
    console.log("'A'Grade");
}
else if (TomScore >= 60) {
    console.log("'B'Grade");
}
else if (TomScore >= 50) {
    console.log("'C'Grade");
}
else if (TomScore >= 40) {
    console.log("'D'Grade");
}
else {
    console.log("'F'Grade");
}

// Jane grades 

if (JaneScore >= 80) {
    console.log("'A'Grade");
}
else if (JaneScore >= 60) {
    console.log("'B'Grade");
}
else if (JaneScore >= 50) {
    console.log("'C'Grade");
}
else if (JaneScore >= 40) {
    console.log("'D'Grade");
}
else {
    console.log("'F'Grade");
}


// Peter grades 


if (PeterScore >= 80) {
    console.log("'A'Grade");
}
else if (PeterScore >= 60) {
    console.log("'B'Grade");
}
else if (PeterScore >= 50) {
    console.log("'C'Grade");
}
else if (PeterScore >= 40) {
    console.log("'D'Grade");
}
else {
    console.log("'F'Grade");
}


// John grades 

if (JohnScore >= 80) {
    console.log("'A'Grade");
}
else if (JohnScore >= 60) {
    console.log("'B'Grade");
}
else if (JohnScore >= 50) {
    console.log("'C'Grade");
}
else if (JohnScore >= 40) {
    console.log("'D'Grade");
}
else {
    console.log("'F'Grade");
}




// Task - 3 

// print the largest number using if-else.

var FristNumber = 13;
var SecondNumber = 79;
var ThirdNumber = 45;

if (FristNumber > SecondNumber && FristNumber > ThirdNumber) {
    console.log(FristNumber)
}

else if (SecondNumber > ThirdNumber) {
    console.log(SecondNumber);
}
else {
    console.log(ThirdNumber)
}


// whether a triangle is Isosceles or not using if-else.

var FristSideTriangle = 9;
var SecondSideTriangle = 8;
var ThirdSideTriangle = 9;

if ((FristSideTriangle == SecondSideTriangle) || (FristSideTriangle == ThirdSideTriangle) || (SecondSideTriangle == ThirdSideTriangle)) {
    console.log("The Triangle Isosceles");
}

 else {
    console.log("The Triangle Not Isosceles");
}