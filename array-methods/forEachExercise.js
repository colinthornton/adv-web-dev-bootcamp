/*
Write a function called doubleValues which accepts an array and returns a new
array with all the values in the array passed to the function doubled.
*/
function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function(num) {
    newArr.push(num * 2);
  });
  return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new
array with only the even values in the array passed to the function.
*/
function onlyEvenValues(arr) {
  var newArr = [];
  arr.forEach(function(num) {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  });
  return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and
returns a new array with only the first and last character of each string.
*/
function showFirstAndLast(arr) {
  var newArr = [];
  arr.forEach(function(str) {
    newArr.push(str[0] + str[str.length - 1]);
  });
  return newArr;
}

/*Write a function called addKeyAndValue which accepts an array of objects, a
key, and a value and returns the array passed to the function with the new key
and value added for each object.
*/
function addKeyAndValue(arr, key, value) {
  arr.forEach(function(obj) {
    obj[key] = value;
  });
  return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object
with the keys as the vowel and the values as the number of times the vowel
appears in the string. This function should be case insensitive so a lowercase
letter and uppercase letter should count.
*/
function vowelCount(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var result = {};

  str = str.toLowerCase();
  str.split('').forEach(function(letter) {
    if (vowels.indexOf(letter) > -1) {
      result[letter] ? result[letter]++ : result[letter] = 1;
    }
  });
  return result;
}
