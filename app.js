var text;
var fruits = 'Banana';
switch (fruits) {
    case "Banana":
        text = "Banana is good"
    break;
    case "Orange":
        text = "I am not a fan of orange.";
    break;
    case "Apple":
        text = "How you like them apples?";
    break;
    default:
        text = "I have never heard of that fruit...";
        break;
 }
console.log(text);

var day;
var text2;
var day = prompt("which day is today?")
//var day = 'friday';
switch (day) {
    case "monday":
    case "wednesday":
    case "thursday":
    case "saturday":
        text2 = "today we have in class session"
        break;
    case "tuesday":
    case "friday":
        text2 = "today is teamwork day.";
    break;
    case "sunday":
        text2 = "today is holiday";
    break;
    default:
        text2 = "you missed the day!";
        break;

 }
console.log(text2);

let result;
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter the first number '));
const number2 = parseFloat(prompt('Enter the second number: '));
switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator found');
        break;
}