//Question 1//
ages = [3, 9, 23, 64, 2, 8, 28, 93];
result = ages[ages.length-1] - ages[0];
console.log(result);


ages.push(30);
result = ages[ages.length-1] - ages[0];
console.log(result);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

const averageAge= sum / ages.length;
console.log(averageAge);



//question 2//

names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

let namesLength = 0;
let howManyNames= names.length;
for (let i = 0; i < names.length; i++) {
    namesLength += names[i].length
}

const lettersAverage = namesLength / howManyNames;
console.log(lettersAverage);

// question 3//

console.log("array[array.length-1]")

//question 4//

console.log("array[0]")

//question5//

const nameLengths=[]
for (let i=0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths)

//question 6//

let sumNameLengths = 0
for (let i=0; i < names.length; i++) {
    sumNameLengths += nameLengths[i]
}
    console.log(sumNameLengths)
//question7//

function questionSeven(word, n) {
    let questionSeven ="";
    for (let i=0; i <n; i++) {
        questionSeven += word;
    }
    return questionSeven;
}
const result1 = questionSeven("hello", 3);
console.log(result1);

//question 8//

function fullName(fisrtName,lastName) {
    return firstName + " " + lastName;
}

let firstName="Tyler";
let lastName="Ade";
console.log(fullName(firstName,lastName))

//question 9//

function questionNine(numbers) {
    let sum = 0;
    for (let i=0; i< numbers.length; i++) {
        sum += numbers[i]
    }
    return sum > 100
}

const numbers = [12, 15,67,23,45,68,0]
console.log(questionNine(numbers))

//question 10//

function getAverage(numbersTwo) {
let sumTwo = 0;
for (let i=0; i <numbersTwo.length; i++) {
    sumTwo += numbersTwo[i]
}
return sumTwo / numbersTwo.length
}

const numbersTwo =[12,24,56,27,12,28];
console.log(getAverage(numbersTwo))


//question 11//

function compareArrays(array1, array2) {
    const average1 = array1.reduce((sum,num) => sum + num, 0) / array1.length
    const average2 = array2.reduce((sum,num) => sum + num, 0) / array2.length
    return average1 > average2
}
const array1 = [23,25,626,23]
const array2 = [56,12,6326,7]
console.log(compareArrays(array1,array2))

//question 12//

function willBuyDrink(isHotOutside, MoneyInPocket) {
    return isHotOutside && MoneyInPocket > 10.50;
}
console.log(willBuyDrink(true,15))

//question 13//

//returns a string in alphabetical order//
function alphabeticalOrder(param13) {
    return param13.split('').sort().join('');
}
console.log(alphabeticalOrder("question thirteen"))

