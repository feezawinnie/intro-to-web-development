// compare two integers
//var num1 = window.prompt("input the first integer", "0");
//var num2 = window.prompt("input the second integer", "0");
var num1 = 7;
var num2 = 4;
//compare the two values
function compareNumbers(num1, num2) {
  var result = "";

  if (parseInt(num1, 10) > parseInt(num2, 10)) {
    result = "The larger of " + num1 + " and " + num2 + " is " + num1 + ".";
  } else if (parseInt(num2, 10) > parseInt(num1, 10)) {
    result = "The larger of " + num1 + " and " + num2 + " is " + num2 + ".";
  } else {
    result = "The values " + num1 + " and " + num2 + " are equal. ";
  }
  // document.getElementById("output").innerHTML = result;
}

compareNumbers(num1, num2);

//var x = 3;
//var y = -7;
//var z = 2;
function getProductSign(x, y, z) {
  let product = x * y * z;

  if (product > 0) {
    alert("the sign is +");
  } else if (product < 0) {
    alert("the sign is -");
  } else {
    alert("the product is o");
  }
}
getProductSign(3, -7, 2);

function sortNumbers(a, b, c) {
  let largest, middle, smallest;

  if (a <= b && a <= c) {
    smallest = a;
    if (b <= c) {
      middle = b;
      largest = c;
    } else {
      middle = c;
      largest = b;
    }
  } else if (b <= a && b <= c) {
    smallest = b;
    if (a <= c) {
      middle = a;
      largest = c;
    } else {
      middle = c;
      largest = a;
    }
  } else {
    smallest = c;

    if (a <= b) {
      middle = a;
      largest = b;
    } else {
      middle = b;
      largest = a;
    }
  }
  //alert("order: " + largest + "," + middle + "," + smallest + ".");
}

sortNumbers(0, -1, 4);

function findLargest(a, b, c, d, e) {
  let largest = a;

  if (b > largest) {
    largest = b;
  }

  if (c > largest) {
    largest = c;
  }
  if (d > largest) {
    largest = d;
  }
  if (e > largest) {
    largest = e;
  }
  alert("the largest is : " + largest);
}
findLargest(-5, -2, -6, 0, -1);

let result = "";

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    result += i + " is even<br>";
  } else {
    result += i + " is odd<br>";
  }
}

// document.getElementById("result").innerHTML = result;

let students = {
  David: 80,
  Vinoth: 77,
  Divya: 88,
  Ishitha: 95,
  Thomas: 68,
};

let total = 0;
let count = 0;

for (let student in students) {
  total += students[student];
  count++;
}

let average = total / count;

let grade = "";

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else if (average <= 100) {
  grade = "A";
}

let output = "average marks: " + average.toFixed(2) + "<br>grade: " + grade;
// document.getElementById("average").innerHTML = output;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    multiples(i + "fizzbuzz");
  } else if (i % 3 === 0) {
    multiples(i + "fizz");
  } else if (i % 5 === 0) {
    multiples(i + "buzz");
  } else {
    multiples(i);
  }
}
// document.getElementById("multiple").innerHTML = multiples;
console.log("princess");
