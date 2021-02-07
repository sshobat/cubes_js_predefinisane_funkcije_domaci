// ***** JS PREDEFINED FUNCTIONS HOMEWORK *****


// TASK 1

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should receive string, and transform all letters to lowercase.

//SOLUTION

var string = "Lorem ipsum dolor sit amet";
var newString = string.toLocaleLowerCase();

console.log(string);
console.log(newString);

// TASK 2

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should check if there is a word "sit" in the string, and console log sentence saying that it exist or not.

//SOLUTION

var string = "Lorem ipsum dolor sit amet";

var word = "sit";

if(string.indexOf(word) > -1) {
    console.log('Word ' + word + ' is in the string.');
}else {
    console.log('Word ' + word + ' is not in the string.');
}

// TASK 3

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should find and return index of the last letter in the sentence.

//SOLUTION

var string = "Lorem ipsum dolor sit amet";

var lastLetterIndex = string.length - 1 ;

console.log(lastLetterIndex);

// TASK 4

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should split string based on empty space, and return first 3 results.

//SOLUTION

var string = "Lorem ipsum dolor sit amet";
var newString = string.split(" ").slice(0, 3);
console.log(newString);

// TASK 5

// Based on given string:

// "Piter is an actor."

// Create a function that should turn a string into the following string:

// "Pitor is an acter."

//SOLUTION

var string = "Piter is an actor."

var newString = string.split(" ");

newString.splice(0, 1, "Pitor");
newString.splice(3, 1, "acter.");
newString = newString.join(" ");

console.log(newString);

// TASK 6

// Based on given array:

// var someData = [34, 23, 14, 56, 23, 44, 65];

// Create a function that should remove number 56 from an array and return array without it.

//SOLUTION

var someData = [34, 23, 14, 56, 23, 44, 65];

var result = someData.filter(function(item) {
    return item !==56
});

console.log(result);

// TASK 7

// Based on given array:

// var someData = [34, 23, 14, 56, 23, 44, 65];

// Create a function that should turn it into following array:

// var otherData = [23, 14, 56, 65, 44, 23];

//SOLUTION

var someData = [34, 23, 14, 56, 23, 44, 65];

function arrRepack(arr) {
    var result = [];

    arr.shift();

    var newArr = arr.splice(3, 6).reverse();

    result = arr.concat(newArr);

    return result;
}

console.log(arrRepack(someData));

// TASK 8

// Based on given array:

// var someData = [334, 233, 212, 199, 154, 122];

// Create a function that should repack array to the new one, where each element should be current one, reduced by value of previous one from initial array.

//SOLUTION

var someData = [334, 233, 212, 199, 154, 122];

var newArr = someData.map(function(item, index) {

    if(index > 0) {
        return item - someData[index - 1];
    } else {
        return item;
    }

});

console.log(newArr);

// TASK 9

// Based on given array:

// var students = [
//   {
//      name: "Jim",
//      avgGrade: 8.5556
//   },
//   {
//      name: "Mike",
//      avgGrade: 8.5492
//   },
//   {
//      name: "Anna",
//      avgGrade: 8.9322
//   },
//   {
//      name: "Jack",
//      avgGrade: 8.6111
//   }
// ]

// Create a function that should return new array with all students whose average grade is larger than 8.5. In new array, average grade should be formatted to 2 decimals.

var students = [
  {
    name: "Jim",
    avgGrade: 8.5556
  },
  {
    name: "Mike",
    avgGrade: 8.5492
  },
  {
    name: "Anna",
    avgGrade: 8.9322
  },
  {
    name: "Jack",
    avgGrade: 8.6111
  }
];

var result = students.filter(function(item) {
    
    item.avgGrade = item.avgGrade.toFixed(2);

    return item.avgGrade > 8.5;
});

console.log(result);
