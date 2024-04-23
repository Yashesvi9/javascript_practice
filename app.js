"use strict";

//Javascript practice
/*1. Create a program that asks the user to enter three numbers and then checks if they form
a phythagorean triple. A phythagorean triple is a set of three integers a,b and c, such that 
a² + b² = c². If the numbers form a phythagorean triple, display a message that they do.
Otherwise, display a message that they do not.

//Solution-1
/*
var x = prompt("please enter x ");
var y = prompt("please enter y");
var z = prompt("please enter z");

function phythagoreanTest(x,y,z){
    if((Math.pow(x,2) + Math.pow(y,2)) === Math.pow(z,2)){
        alert("Yes, (" + x + "," + y + "," + z +") is a pythagorean triplet");
        }
    else {
        alert("No, (" + x + "," + y + "," + z +") is not a pythagorean triplet");
    }
}

phythagoreanTest(x,y,z);
*/
//------------------------------------------------------------------------------------------------------------------------------------------------
/*2.Write a program that takes a user input of the temperature and a unit(either celcius or Fahrenheit)
and converts it to the other unit based on the user's choice.The program should 
use an if-else statement to determine the appropriate conversion formula.*/

//Solution-2

/*var temperature = prompt("Enter temperature");
var unit = prompt("Enter unit(either celcius or fahrenheit);

function temperatureTest(temperature,unit){
    if(unit === "celcius"){
    var fahrenheit = (temperature * (9 / 5)) + 32;
    alert(`The temperature in fahrenheit is ${fahrenheit.toFixed(2)}`);
}
else {
    var celcius = (temperature - 32) * 5/9 ;
    alert(`The temperature in celsius is ${celcius.toFixed(2)}`);
}
}

temperatureTest(temperature,unit);
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------
/*3.Write a program that generates a random number between 1 and 100 and then prompts the user to guess the number. <If the user;s
guess is "too high" and prompt the user to guess again. If the user's guess is low, 
the program should print "too low" and prompt the user to guess again. If the user's guess is 
correct, the program should print "Congratulations!" and exit.

//Solution-3

/*let x = Math.floor(Math.random()*100 +1);
var number = prompt("Guess the number");
function guessNumber(x,number){
        
    while(number != x){
        if (number > x){
            number = prompt("Too high,guess again");
        }
        else{
            number = prompt("Too low,guess again");
        }
    }

    alert("Congratulations");
}

guessNumber(x,number);
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------
/*4. Write a program that prompts the user to enter a number and then determines whether the number is prime or not.
The program should use a for loop to check all the possible divisors of the number(except 1and itself) and should use a flag
variable to keep track of whether any divisors were found. If no divisors are found, the number is prime.

//Solution-4

/*var inputNum = prompt("Enter the number");
function primeNumber(num) {
  var i = 0;
  if (num < 2) {
    alert(`${num} is not a prime`);
    return;
  }

  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      alert(`${num} is not a prime`);
      return;
    }
  }
  alert(`${num} is a prime number`);
}
primeNumber(inputNum);*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
/*5.Write a program that uses a while lopp to simulate a game of dice. 
The program should roll two dice(each represented by a random number between 1 and 6) and
print out the result of each roll, as well as the total sum of the rolls. 
The program should continue rolling the dice until the user chooses to stop.*/

//Solution-5

/*var number = parseInt(prompt("Enter the number of terms: "));
var sequence = []
sequence.push(1);
sequence.push(2);
sequence.push(3);

for (let i = 3; i <= number; i++) {
  let sum = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
  sequence.push(sum);
}


alert(`PrecedingTerms: ${sequence.join()}`);*/

//Solution-6

/*alert(`Starting to roll!`);
var playAgain = "y";

while(playAgain === "y" ){
    var roll1 = Math.floor(Math.random()* 6 + 1); 
    var roll2 = Math.floor(Math.random()* 6 + 1); 
    var sum = roll1 +roll2;
    playAgain = prompt(`roll1: ${roll1} \n roll2: ${roll2} \n Total: ${sum} \n Do you want to roll again? (y/n) `);
}
alert(`Thanks for playing!`);*/
