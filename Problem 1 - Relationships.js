// Please write your code here

// Note: if it doesn't contain getRelationship() function, it will not run!

// Function to compare two numbers to show their equality/inequality
  function getRelationship (num1, num2) {
    if (isNaN(num1)) { 
      if (isNaN(num2)) {
        // both values are not numbers
        return "Can't compare relationships because "+num1+" and "+num2+" are not numbers";
      } else {
        // only first value is not a number
        return "Can't compare relationships because "+num1+" is not a number";
      }
    }
    if (isNaN(num2)) {
      // only second value is not a number
      return "Can't compare relationships because "+num2+" is not a number";
    }
      if (num1 > num2) { // first value is greater
        return ">";
      } else if (num1 < num2) { // second value is greater
        return "<";
      } else { // values are equal
        return "=";
      }
    }

var rel = getRelationship(2, 3);
console.log(rel);