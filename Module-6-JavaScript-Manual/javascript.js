Objects


Creating an empty object:

To create an empty object, you can use the object literal notation or the Object constructor.

Example:

// Using object literal notation
const obj = {};

// Using the Object constructor
const obj = new Object();






Creating an object with "key: value" pairs:

You can create an object with key-value pairs using the object literal notation or by assigning values to properties.


Example:

// Using object literal notation
const obj = {
    key1: value1,
    key2: value2,
    // ...
  };
  
  // Assigning values to properties
  const obj = {};
  obj.key1 = value1;
  obj['key2'] = value2;
  // ...






How to access property values of an object:

You can access property values of an object using the dot notation or square bracket notation.


Example:

// Using dot notation
const value = obj.key;

// Using square bracket notation
const value = obj['key'];






How to add new "key: value" pairs:

You can add new key-value pairs to an object by assigning values to new or existing properties.


Example:

// Adding new properties
obj.newKey = newValue;
obj['newKey'] = newValue;








How to delete "key: value" pairs:

You can delete key-value pairs from an object using the delete operator.


Example:

delete obj.key;
delete obj['key'];









When you need to use square bracket notation, instead of dot access:

Square bracket notation is used when the property name is dynamic or when it contains special characters.


Example:

const dynamicKey = 'key3';
const value = obj[dynamicKey];

const specialKey = 'key-with-dash';
const value = obj[specialKey];









The in operator:

The in operator checks if a property exists in an object, including properties in its prototype chain.


Example:

const result = 'key' in obj;








The for...in loop:

The for...in loop iterates over the enumerable properties of an object, including properties in its prototype chain.


Example:

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    // Access each property using obj[key]
  }
}








The this keyword:

The this keyword refers to the current object, typically used within a method to access its own properties and methods.


Example:

const obj = {
  property: value,
  method() {
    console.log(this.property);
  },
};









Constructors

Constructors are functions used to create and initialize objects. 
They are typically used with the new keyword.


Example:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person('John', 25);







Array Methods




.forEach()

Executes a provided function once for each element in the array.


Example:

const array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});








.indexOf()

Returns the first index at which a given element can be found in the array, or -1 if it is not present.


Example:

const array = [1, 2, 3, 2];
console.log(array.indexOf(2)); // Output: 1








.lastIndexOf()

Returns the last index at which a given element can be found in the array, or -1 if it is not present.


Example:

const array = [1, 2, 3, 2];
console.log(array.lastIndexOf(2)); // Output: 3








.find()

Returns the first element in the array that satisfies the provided testing function.


Example:

const array = [1, 2, 3];
const foundElement = array.find((element) => element > 1);
console.log(foundElement); // Output: 2








.sort()

Sorts the elements of an array in place and returns the sorted array.


Example:

const array = [3, 1, 2];
array.sort();
console.log(array); // Output: [1, 2, 3]








.reverse()

Reverses the order of the elements in the array in place.


Example:

const array = [1, 2, 3];
array.reverse();
console.log(array); // Output: [3, 2, 1]








.split()

Splits a string into an array of substrings based on a specified separator and returns the new array.


Example:

const string = "Hello, World!";
const array = string.split(", ");
console.log(array); // Output: ["Hello", "World!"]








.join()

Joins all elements of an array into a string and returns the new string.


Example:

const array = ["Hello", "World!"];
const string = array.join(", ");
console.log(string); // Output: "Hello, World!"








.reduce()

Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.


Example:

const array = [1, 2, 3, 4];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);








.isArray()

Syntax: Array.isArray(value)

The Array.isArray() method determines whether the passed value is an array.
It returns true if the value is an array, and false otherwise.
This method is useful for checking the type of a value and confirming if it is an array before performing array-specific operations.


Example:

const array1 = [1, 2, 3];
const array2 = 'Hello';
const array3 = { name: 'John' };

console.log(Array.isArray(array1));  // Output: true
console.log(Array.isArray(array2));  // Output: false
console.log(Array.isArray(array3));  // Output: false







JSON (Javascript Object notation)

Is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. 
It is widely used for representing structured data and exchanging data between a server and a web application.


Example of a JSON object:

{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "hobbies": ["reading", "gaming", "coding"],
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  }
}








Syntax rules

JSON data is represented in key-value pairs.
Data is enclosed in curly braces {}.
Each key-value pair is separated by a colon (:).
Multiple key-value pairs are separated by commas (,).
Strings are enclosed in double quotation marks (").
Numbers, booleans, null, arrays, and objects are valid JSON data types.







Converting from JSON text to a Javascript object

JavaScript provides a built-in method called JSON.parse() to convert JSON text into a JavaScript object.


Example:

const jsonString = '{"name":"John","age":30,"isStudent":false}';
const obj = JSON.parse(jsonString);
console.log(obj); // Output: { name: 'John', age: 30, isStudent: false }










How to access data in JSON hierarchy (include example of deeply nested data)

To access data in a JSON hierarchy, you can use dot notation (.) or square bracket notation ([]). 
If the data is deeply nested, you can chain the notations to access the desired value.


Example:

const obj = {
  "name": "John",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  }
};

console.log(obj.name); // Output: John
console.log(obj.address.city); // Output: New York








How to validate JSON

To validate JSON, you can use the JSON.parse() method. 
If the JSON is valid, it will be parsed without throwing an error. 
If the JSON is invalid, a SyntaxError will be thrown.


Example:

const jsonString = '{"name":"John","age":30,"isStudent":false}';
try {
  const obj = JSON.parse(jsonString);
  console.log('JSON is valid.');
} catch (error) {
  console.error('JSON is invalid:', error.message);
}
