'use strict'

let squareList = document.getElementById("square-list");
let squareTemplate = document.getElementById("number-i");

squareList.innerHTML= '';

for (let i = 1; i < 101; i++) {
    let square = squareTemplate.cloneNode(true);

    if (i % 15 == 0) {
        square.id = 'fizzbuzz';
        square.innerHTML = 'FizzBuzz';
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        square.id = 'fizz';
        square.innerHTML = 'Fizz';
        console.log("Fizz");
    } else if (i % 5 == 0) {
        square.id = 'buzz';
        square.innerHTML = 'Buzz';
        console.log("Buzz");
    } else {
        square.id = 'number-i';
        square.innerHTML = i;
        console.log(i);
    }
    squareList.appendChild(square);
}