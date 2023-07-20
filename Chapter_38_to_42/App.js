//Question_01:
function power(a, b) {
    return Math.pow(a, b);
  }
  let result = power(3, 3);
document.write(result);   

//Question_02:
function isLeapYear() {
    var year = prompt("Enter a year:");
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true; 
    } else {
      return false; 
    }
  }

if (result) {
  document.write("It's a leap year!");
} else {
  document.write("It's not a leap year!");
}

//Question_03:
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
  }
  
  function calculateTriangleArea(a, b, c) {
    var s = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  var sideA = 5;
  var sideB = 7;
  var sideC = 9;
  
  var area = calculateTriangleArea(sideA, sideB, sideC);
 document.write("The area of the triangle is: " + area);
  
  
//Question_04:
function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
  }
  
  function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var percentage = (totalMarks / 300) * 100;
    return percentage;
  }
  
  function mainFunction() {
    var subject1 = 85;
    var subject2 = 90;
    var subject3 = 92;
  
    var average = calculateAverage(subject1, subject2, subject3);
    var percentage = calculatePercentage(subject1, subject2, subject3);
  
    document.write("Average marks: " + average + "</br>");
    document.write("Percentage: " + percentage + "%");
  }
mainFunction();
  
//Question_05:
function customIndexOf(string, searchChar) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === searchChar) {
        return i; 
      }
    }
    return -1; 
  }
var string = prompt("Enter a string:");
var searchChar = prompt("Enter a character to search for:");
var index = customIndexOf(string, searchChar);
  if (index !== -1) {
    document.write("The character '" + searchChar + "' is found at index " + index);
  } else {
    document.write("The character '" + searchChar + "' is not found in the string.");
  }
  
//Question_06:
function deleteVowels(sentence) {
    var result = "";
    var vowels = "aeiouAEIOU";
  
    for (let i = 0; i < sentence.length; i++) {
      if (vowels.indexOf(sentence[i]) === -1) {
        result += sentence[i];
      }
    }
  
    return result;
  }
  var sentence = "Hello, My name is fiza sahar!";
  var modifiedSentence = deleteVowels(sentence);
  document.write(modifiedSentence);
    
//Question_08:
function convertToMeters(distance) {
    return distance * 1000;
  }
    function convertToFeet(distance) {
    return distance * 3280.84;
  }
  
  function convertToInches(distance) {
    return distance * 39370.1;
  }
  
  function convertToCentimeters(distance) {
    return distance * 100000;
  }
  
  function printDistances(distance) {
    var meters = convertToMeters(distance);
    var feet = convertToFeet(distance);
    var inches = convertToInches(distance);
    var centimeters = convertToCentimeters(distance);
  
    document.write("Distance in meters: " + meters + " m" + "<br>");
    document.write("Distance in feet: " + feet + " ft" + "<br>");
    document.write("Distance in inches: " + inches + " in" + "<br>");
    document.write("Distance in centimeters: " + centimeters + " cm" + "<br>");
  }

  var distance = prompt("Enter the distance between two cities in kilometers:");
  
  printDistances(parseFloat(distance));

//Question_09:
function calculateOvertimePay(hoursWorked) {
    var regularHours = 40; 
    var overtimeRate = 12; 
  
    if (hoursWorked <= regularHours) {
      return 0; 
    } else {
      var overtimeHours = hoursWorked - regularHours; 
      var overtimePay = overtimeHours * overtimeRate; 
      return overtimePay;
    }
  }
  var hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
  var overtimePay = calculateOvertimePay(hoursWorked);
  document.write("Overtime Pay: Rs. " + overtimePay.toFixed(2));
  
//Question_10:
function calculateCurrencyNotes(amountInHundreds) {
    var denomination100 = 100;
    var denomination50 = 50;
    var denomination10 = 10;
  
    var notes100 = Math.floor(amountInHundreds); 
    var remainingAmount = (amountInHundreds - notes100) * 100; 
    var notes50 = Math.floor(remainingAmount / denomination50); 
    remainingAmount %= denomination50; 
    var notes10 = Math.floor(remainingAmount / denomination10); 
  
    return {
      notes100: notes100,
      notes50: notes50,
      notes10: notes10
    };
  }
   var amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
   var currencyNotes = calculateCurrencyNotes(amountInHundreds);
  
  document.write("Number of 100s notes: " + currencyNotes.notes100 + "<br>");
  document.write("Number of 50s notes: " + currencyNotes.notes50 + "<br>");
  document.write("Number of 10s notes: " + currencyNotes.notes10 + "<br>");
  