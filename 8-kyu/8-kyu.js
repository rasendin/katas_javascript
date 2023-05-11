function getHelloWorld(){
    return 'Hello World';
}

function getStringByCondition(condition) {
    if(condition === true) {
        return 'La condición es verdadera';
    } else {
        return 'La condición es falsa';
    }
}

function addKataToInput(sentence) {
    const subFix = ' kata';
    return`${sentence}${subFix}`;
}

function basicCalculator(number1, number2, operation) {
    if(operation === '+') {
        return number1 + number2;
    } else if (operation === '-') {
        return number1 - number2;
    } else if (operation === '/') {
        return number1 / number2;
    } else if (operation === '*') {
        return number1 * number2;
    }
}

function negativeNumber(number) {
    if (typeof number !== 'number') {
        return null;
    }
    if (number < 0) {
        return number;
    }
    return number * -1;
}

function basicCalculatorWithValidation(number1, number2, operation) {
    if(typeof number1 !== 'number' || typeof number2 !== 'number') {
        return null;
    }
    if(operation !== '+' 
    && operation !== '-'
    && operation !== '/'
    && operation !== '*') {
        return null;
    }
    return basicCalculator(number1, number2, operation);
}

function sumNumbersInArray(array) {

    let result = 0;

    if (!Array.isArray(array)) {
        return result;
    }

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            result += array[i];
        }
    }

    return result;    
}

function countNegativeNumbersInArray(array) {
    let counter = 0;

    if (!Array.isArray(array)) {
        return 0;
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            counter++;
        }
    }
    return counter;
}

function converToEuro(number) {
    let notANumber = 0;
    if(typeof number !== 'number') {
        return notANumber.toFixed(2) + "€"
    }
    return number.toFixed(2) + "€";
}

function abbreviateWords(String1, String2) {
    if(typeof String1 !== 'string' 
    || typeof String2 !== 'string'
    || String1 === ''
    || String2 === '') {
        return null;
    }
    return String1.charAt(0).toUpperCase() + "." + String2.charAt(0).toUpperCase();
}

function filterByWord(frase, palabra) {
    if(typeof frase !== 'string' 
    || typeof palabra !== 'string') {
        return null;
    }
    return frase.split(palabra).join('');
}

function reverse(word) {
    if(typeof word !== 'string') {
        return null;
    }
    return word.split('').reverse().join('');
}

module.exports = {getHelloWorld, getStringByCondition, addKataToInput,basicCalculator,
    negativeNumber, basicCalculatorWithValidation, sumNumbersInArray, countNegativeNumbersInArray,
    converToEuro, abbreviateWords, filterByWord, reverse};