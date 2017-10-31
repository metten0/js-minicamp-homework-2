// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x >= y) {
    return x;
  }
  return y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if ( language == 'German') {
    return 'Guten Tag!';
  }
  if (language == 'Spanish') {
    return 'Hola!';
  }
  return 'Hello!';
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 5 || num === 10;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  return 20 < num && num < 50;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return num === Math.floor(num);
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 15 == 0) {
    return 'fizzbuzz';
  }
  if (num % 3 == 0) {
    return 'fizz';
  }
  if (num % 5 == 0) {
    return 'buzz';
  }
  return num;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num <= 1) {
    return false;
  }

  for (var i=2; i<num/2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  var addOne = function(x) { return x+1; };
  return arr.map(addOne);
  // arr.forEach(function(num){
  //   num+1;
  // });
  // return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  var returnStr = '';
  words.forEach(function(word){
    returnStr = returnStr + word + ' ';
  });
  return returnStr.trim();
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.includes(item);
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  //return numbers.reduce((x, y) => x + y);
  var sum = 0;
  numbers.forEach(function(num){sum=sum+num;});
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  //return (testScores.reduce((x, y) => x + y)) / arr.length;
  var sum = 0;
  testScores.forEach(function(score){sum=sum+score;});
  return sum/testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  // return Math.max(numbers);
  var max = numbers[0];
  numbers.forEach(function(num){
    if (num > max) {
      max = num;
    }
  });
  return max;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
