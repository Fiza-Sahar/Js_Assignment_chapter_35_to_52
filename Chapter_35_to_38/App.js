// CHAPTER_35_TO_38:
// Question_01:
document.write(Date());

// Question_02:
function greet(firstName, LastName) {
    var fullName = firstName + " " + LastName;
    document.write("hello " + fullName + " How Are you!")
}
greet("Fiza" , "Sahar");

// Question_03:

function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
  
   var sum = num1 + num2;
    return sum;
  }
  
var result = addNumbers();
  document.write("The sum is:", result);
  
// Question_04:
function computeOperation(num1, num2, operator) {
   var result;
  
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      result = "Invalid operator";
    }
  
    document.write("The result is: " + result);
  }
  
  // Example usage
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operator = prompt("Enter the operator (+, -, *, /):");
  
  computeOperation(num1, num2, operator);
  
// Question_05:
function squareNumber(number) {
    return number * number;
  }
var  num = parseInt(prompt("Enter a number: "));
var result = squareNumber(num);
document.write("The square of " + num + " is:", result);
  
// Question_06:
function factorial() {
 var n = parseInt(prompt("Enter a number:"));
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

var result = factorial();
document.write(result); 

// Question_07:
function countNumbers(start, end) {
  if (start > end) {
    alert("Start number should be less than or equal to the end number.");
    return;
  }
  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}
countNumbers(1, 20);

// Question_08:
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }

  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);

  return hypotenuse;
}

var base = parseFloat(prompt("Enter the base of the right-angle triangle:"));
var perpendicular = parseFloat(prompt("Enter the perpendicular of the right-angle triangle:"));

var hypotenuse = calculateHypotenuse(base, perpendicular);
document.write("Hypotenuse:", hypotenuse);

// Question_09:
function calculateAreaValue(width, height) {
  var area = width * height;
  return area;
}
var areaValue = calculateAreaValue(5, 10);
document.write("Area (arguments as values):", areaValue);
function calculateAreaVariables(width, height) {
  var area = width * height;
  return area;
}
var width = 5;
var height = 10;
var areaVariables = calculateAreaVariables(width, height);
document.write("Area (arguments as variables):", areaVariables);

// Question_10:
function isPalindrome(str) {
 var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
 var reversedStr = cleanedStr.split("").reverse().join("");
 if (cleanedStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}
var inputString = prompt("Enter a string:");
var result = isPalindrome(inputString);

if (result) {
  document.write("The string is a palindrome.");
} else {
  document.write("The string is not a palindrome.");
}

// Question_11:
function capitalizeFirstLetter(str) {
  var words = str.split(" ");
  var capitalizedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }

  var capitalizedString = capitalizedWords.join(" ");
  return capitalizedString;
}
var inputString = prompt("Enter a string:");
var result = capitalizeFirstLetter(inputString);
document.write("Capitalized String:", result);

// Question_12:
function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";

  for (var i = 0; i < words.length; i++) {
    var currentWord = words[i];

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}
var inputString = prompt("Enter a string:");
var result = findLongestWord(inputString);
document.write("Longest Word:" + result);

// Question_13:
function countOccurrences(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count++;
    }
  }
  return count;
}
var inputString = prompt("Enter a string:");
var inputLetter = prompt("Enter a letter:");
var result = countOccurrences(inputString + inputLetter);
document.write("Occurrences:" + result);

//Question_14:
function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write("The circumference is " + circumference.toFixed(2));
}
function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  document.write("The area is " + area.toFixed(2));
}
var radius = parseFloat(prompt("Enter the radius of the circle:"));
calcCircumference(radius);
calcArea(radius);


