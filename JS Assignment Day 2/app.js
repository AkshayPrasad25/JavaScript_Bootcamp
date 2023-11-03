//Javascript Bootcamp Day 2
//Assignment 1
function checkNumber(number) {
    console.log("This is Assignment 1 Result")
    // Check if the number is positive, negative, or zero
    if (number > 0) {
      console.log("Positive");
    } else if (number < 0) {
      console.log("Negative");
    } else {
      console.log("Zero");
    }
}

checkNumber(-12)
//Assignment 2
function factorial(n) {
    console.log("This is Assignment 2 Result")
    // Check for negative input and handle edge case of 0
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    } else if (n === 0) {
      return 1;
    } else {
      // Calculate the factorial using a for loop
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    }
}

fac=factorial(7)
console.log(fac)

//Assignment 3

function findLargerNumber(num1, num2) {
    // Compare the two numbers and return the larger one
    return num1 > num2 ? num1 : num2;
}

largnum=findLargerNumber(11,88)
console.log("This is Assignment 3 Result")
console.log(largnum)

//Assignment 4

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
    // Create an array to store the characters of the cleaned string
    const characters = str.split("");
  
    // Create an array to store the reversed characters
    const reversedCharacters = [];
  
    // Add the reversedCharacters array with characters in reverse order
    for (let i = characters.length - 1; i >= 0; i--) {
      reversedCharacters.push(characters[i]);
    }
  
    // Compare the characters and reversedCharacters arrays
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] !== reversedCharacters[i]) {
        return false;
      }
    }
  
    return true;
}

boolres=isPalindrome("racecar")
console.log("This is Assignment 4 Result")
console.log(boolres)

//Assignment 5

function printPrimesUpTo(n) {
    console.log("This is Assignment 5 Result")
    // Iterate through numbers from 2 to n
    for (let num = 2; num <= n; num++) {
      let isPrime = true; // Assume the current number is prime
      
      // Check for factors from 2 to the square root of the number
      for (let i = 2; i <= Math.sqrt(num); i++) {
        // If the current number is divisible by i, it's not prime
        if (num % i === 0) {
          isPrime = false;
          break; // No need to continue checking
        }
      }
      
      // If isPrime is still true, the number is prime, so print it
      if (isPrime) {

        console.log(num);
      }
    }
  }
  
 printPrimesUpTo(50); // Prints all prime numbers less than or equal to 50
  
//Assignment 6

function simpleCalculator(num1, num2, operator) {
    // Perform the specified operation based on the operator
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Division by zero is not allowed";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
}

rescalc=simpleCalculator(2,3,"+")
console.log("This is Assignment 6 Result")
console.log(rescalc)

//Assignment 7

function countVowels(str) {
    // Use a regular expression to find and count vowels in the string
    const vowels = str.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
  }

vownum=countVowels("AkshayPrasad")
console.log("This is Assignment 7 Result")
console.log(vownum)

//Assignment 8

function isPerfectNumber(num) {
    // Check if the number is a perfect number by finding its divisors
    if (num <= 0) return false;
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
}

perfnum=isPerfectNumber(12)
console.log("This is Assignment 8 Result")
console.log(perfnum)

//Assignment 9

function fibonacciSeries(n) {
    console.log("This is Assignment 9 Result")
    console.log("Fibonacci series:")
    // Generate the Fibonacci series up to the given number
    let fib = [0, 1];
    while (fib[fib.length - 1] + fib[fib.length - 2] <= n) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    console.log(fib.join(", "));
    console.log("End of Fibonacci Series")
  }

fibonacciSeries(25)


//Assignment 10

function multiplicationTable(n) {
    console.log("This is Assignment 10 Result")
    // Print the multiplication table for the given positive integer
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
}

multiplicationTable(11)
  
  
  
  