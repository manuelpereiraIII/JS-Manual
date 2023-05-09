Tips for Writing Clean Code:


// In no particualr order. I numbered them to make it easier for me to see.
// I also spaced each one so that they are in blue. When they weren't spaced
// apart it looked like a see of orange and red. Hard to comprehend
1. Use meaningful variable and function names.

2. Keep your code concise and focused on a single task.

3. Comment your code to improve readability and understanding.

4. Use consistent indentation and formatting.

5. Break down complex tasks into smaller, manageable functions.

6. Avoid unnecessary code duplication.

7. Write modular and reusable code.

8. Follow established coding conventions and best practices.

9. Write self-explanatory code that is easy to understand.

10. Regularly refactor your code to improve its structure and maintainability.



Array:

An array is a built-in data structure in JavaScript that allows you to store multiple values in a single variable. 
The values in an array are ordered and can be of any data type.


Creating Arrays:

You can create an array by enclosing comma-separated values within square brackets ([]):

Example:

let myArray = [1, 2, 3, 4, 5];
// Note it my say 1-5 but in reality is 0-4 as 0 is the first number in the array. 
// See next example


Accessing Array Elements:

You can access individual elements in an array using square brackets notation ([]). 
Array indices start from 0 for the first element:

Example:

let myArray = [1, 2, 3, 4, 5];
console.log(myArray[0]); // Output: 1
console.log(myArray[4]); // Output: 5





Changing an Array Element:

You can change the value of an array element by assigning a new value to the specific index:

Example:

let myArray = [1, 2, 3, 4, 5];
myArray[2] = 10;
console.log(myArray); // Output: [1, 2, 10, 4, 5]




Length Property:

The length property of an array returns the number of elements in the array:

Example:

let myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); // Output: 5




Looping over Array Elements:

You can use loops to iterate over array elements.

For Loop Example:

let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// With this one it starts at 0 and works through the code until it finds what it wants.....if it does. 


Difference between Arrays & Objects:

In Java, arrays and objects are both reference types, but they have some differences:

Arrays are a fixed-size collection of homogeneous elements (i.e., elements of the same type). 
They have a length that is determined at the time of creation and cannot be changed afterward.
Objects, on the other hand, are instances of classes and can contain a combination of different types of 
data (attributes/fields) and behavior (methods).



Converting Arrays to Strings:

To convert an array to a string representation in Java, you can use the Arrays.toString() method from the java.util package. 

Example:

import java.util.Arrays;

int[] myArray = {1, 2, 3, 4, 5};
String arrayString = Arrays.toString(myArray);
System.out.println(arrayString); // Output: [1, 2, 3, 4, 5]



push() pop()

The push() and pop() methods are commonly used with arrays or stack data structures to add elements to the end of an array 
(or stack) and remove the last element, respectively. 
However, in Java, arrays have a fixed size, so there are no built-in methods like push() and pop() for arrays.

To achieve similar functionality, you can use the ArrayList class from the java.util package, which dynamically adjusts its size. 

Example:


import java.util.ArrayList;

// Create an ArrayList
ArrayList<Integer> myArrayList = new ArrayList<>();

// push() - Add an element to the end of the ArrayList
myArrayList.add(10); // Adding 10 to the end

// pop() - Remove the last element from the ArrayList
int lastElement = myArrayList.remove(myArrayList.size() - 1);

System.out.println(lastElement); // Output: 10





Shift() Unshift()


The shift() and unshift() methods are commonly used with arrays to add elements to the beginning of an array 
(or shift the elements) and remove the first element, respectively. 
However, in Java, arrays have a fixed size, so there are no built-in methods like shift() and unshift() for arrays.

To achieve similar functionality, you can use the ArrayList class from the java.util package, which dynamically adjusts its size. 


Example:

import java.util.ArrayList;

// Create an ArrayList
ArrayList<Integer> myArrayList = new ArrayList<>();

// unshift() - Add an element to the beginning of the ArrayList
myArrayList.add(0, 10); // Adding 10 at index 0

// shift() - Remove the first element from the ArrayList
int firstElement = myArrayList.remove(0);

System.out.println(firstElement); // Output: 10







Concatenating/Merging Arrays



To concatenate or merge arrays in Java, you have multiple options. Here are a few common approaches:

1. Using System.arraycopy():

In this example, mergedArray is created with a size equal to the sum of the lengths of array1 and array2. 
The elements from array1 are copied into mergedArray starting from index 0, 
and then the elements from array2 are copied starting from the position after the last element of array1.


Example:


int[] array1 = {1, 2, 3};
int[] array2 = {4, 5, 6};
int[] mergedArray = new int[array1.length + array2.length];
System.arraycopy(array1, 0, mergedArray, 0, array1.length);
System.arraycopy(array2, 0, mergedArray, array1.length, array2.length);

// The output her will be 1 2 3 4 5 6




You can also use Arrays.copyOf()

Here, mergedArray is created by using Arrays.copyOf() to create an array with 
a size equal to the sum of the lengths of array1 and array2. 
The elements from array1 are copied into mergedArray, 
and then the elements from array2 are copied starting from the position 
after the last element of array1.Accessing

Example:

import java.util.Arrays;

int[] array1 = {1, 2, 3};
int[] array2 = {4, 5, 6};
int[] mergedArray = Arrays.copyOf(array1, array1.length + array2.length);
System.arraycopy(array2, 0, mergedArray, array1.length, array2.length);


// There are also third-party libraries like Apache Commons Lang or Guava 
// that provide utility methods for array manipulation, including concatenation.




Flattening Arrays:


Flattening an array means transforming a nested array structure into a single-dimensional array. 
In Java, you can flatten an array using recursion or by using libraries like Apache Commons Lang or Guava. 



An example of flattening an array using recursion:


import java.util.ArrayList;
import java.util.Arrays;

public class ArrayFlattener {
    public static int[] flattenArray(int[][] nestedArray) {
        ArrayList<Integer> flattenedList = new ArrayList<>();
        flattenHelper(nestedArray, flattenedList);
        return flattenedList.stream().mapToInt(Integer::intValue).toArray();
    }

    private static void flattenHelper(int[][] nestedArray, ArrayList<Integer> flattenedList) {
        for (int[] array : nestedArray) {
            for (int element : array) {
                if (element != Integer.MIN_VALUE) {
                    flattenedList.add(element);
                }
            }
        }
    }

    public static void main(String[] args) {
        int[][] nestedArray = {{1, 2, 3}, {4, 5}, {6}};
        int[] flattenedArray = flattenArray(nestedArray);
        System.out.println(Arrays.toString(flattenedArray));
    }
}



// The output will be [1, 2, 3, 4, 5, 6]







Splice and Slice 


splice()


In JavaScript the splice() method allows you to add, remove, or replace elements in an array. 
It modifies the original array and returns the removed elements as a new array.

// Syntax

'startIndex': The index at which to start modifying the array.
'deleteCount' (optional): The number of elements to remove from the startIndex.
'item1, item2,' ... (optional): Elements to be added to the array at the startIndex.


// Syntax example in JavaScript
array.splice(startIndex, deleteCount, item1, item2, ...);


Example:


let array = [1, 2, 3, 4, 5];

// Remove elements starting from index 2 and add elements 6, 7
let removedElements = array.splice(2, 2, 6, 7);

console.log(array);           // Output: [1, 2, 6, 7, 5]
console.log(removedElements); // Output: [3, 4]





slice()

In JavaScript slice() is a method returns a shallow copy of a portion of an array as a new array. 
It doesn't modify the original array.


// Syntax

'startIndex' (optional): The index at which to begin extraction. If omitted, the slice starts from the beginning of the array.
'endIndex' (optional): The index at which to end extraction (exclusive). If omitted, the slice goes up to the end of the array.



// Syntax examples in JavaScript

array.slice(startIndex, endIndex);



Example:


let array = [1, 2, 3, 4, 5];

let slicedArray = array.slice(1, 4);

console.log(slicedArray); // Output: [2, 3, 4]







Loops


Loops in Java are used to repeatedly execute a block of code until a certain condition is met. 

There are several types of loops available in Java:

for Loop:
The for loop is a control flow statement that allows you to iterate over a block of code for a specific number of times.


Example:


for (int i = 0; i < 5; i++) {
    System.out.println(i);
}


// Output
// 0
// 1
// 2
// 3
// 4




while Loop:
The while loop repeatedly executes a block of code as long as a given condition is true.



Example:


int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}


// Output
// 0
// 1
// 2
// 3
// 4
// Once it hit 4 the lopp tried to run again; however, the while loop was written as less than 5. So, in this case 4 is 5, and 5 would've been 6.
// Thus we hit the end of our loop and break out. 




do...while Loop:
The do...while loop is similar to the while loop, but the code block is executed at least once before the condition is evaluated.

// Syntax

do {
    // code to be executed
} while (condition);



Example:


int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);



// Output
// 0
// 1
// 2
// 3
// 4




for...ofLoop


The for...of loop is a JavaScript loop that allows you to iterate over iterable objects,
including arrays, strings, maps, sets, and more. 
It provides an easy and concise way to loop through the elements of a collection without explicitly tracking the index or using traditional for loops.


// Syntax

for (variable of iterable) {
    // code to be executed for each element
  }


Examples:


Iterating over an Array:


const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}


// Output
// 1
// 2
// 3
// 4
// 5

// Here we're asking what's the subscript at index 1 in the array. So, it's 1 and not the start of the array which would be 0.


Iterating over a string Example:

const message = "Hello, World!";

for (const char of message) {
  console.log(char);
}

// Output
// H
// e
// l
// l
// o
// ,
//  
// W
// o
// r
// l
// d
// !




An example iterating over a map:


const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");

for (const entry of myMap) {
  console.log(entry);
}



// Output
// ["name", "John"]
// ["age", 30]
// ["city", "New York"]










.map():

The .map() method is available in JavaScript for arrays and allows you to create a 
new array by applying a transformation function to each element of the original array. 


In Java, you can achieve similar functionality using the Stream API and the .map() operation.

In this example, the .map() operation applies the lambda function n -> n * 2 to each element of the numbers list, 
doubling each number. 
The transformed elements are collected into a new list called transformedNumbers.

Example (in Java):



import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

List<Integer> transformedNumbers = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());

System.out.println(transformedNumbers);  // Output: [2, 4, 6, 8, 10]





filter():

The .filter() method in JavaScript allows you to create a new array by filtering out elements 
from the original array based on a given condition. 


In Java, you can achieve similar functionality using the Stream API and the .filter() operation.

In this example, the .filter() operation keeps only the elements from the numbers list that satisfy the condition 
n % 2 == 0, 
which filters out the odd numbers. 

The filtered elements are collected into a new list called filteredNumbers.

Example:


import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

List<Integer> filteredNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

System.out.println(filteredNumbers);  // Output: [2, 4]




In Java, the break and continue statements are used to control the flow of loops. 

They provide ways to exit or skip iterations within loops, respectively.


Break Statement:



The break statement is used to terminate the execution of a loop prematurely. 
When encountered within a loop, the break statement immediately exits the loop, and the program continues executing the next statement after the loop.


Here's an example that uses the break statement in a for loop:


for (int i = 1; i <= 5; i++) {
    if (i == 3) {
      break; // terminates the loop when i equals 3
    }
    System.out.println(i);
  }

  

// Output
// 1
// 2

The loop runs from 1 to 5. 
When i becomes 3, the break statement is encountered, causing the loop to terminate immediately. 
As a result, only the values 1 and 2 are printed.





Continue Statement:


The continue statement is used to skip the remaining code within a loop for the current iteration and move on to the next iteration.

Here's an example that uses the continue statement in a for loop:



for (int i = 1; i <= 5; i++) {
    if (i == 3) {
      continue; // skips the rest of the loop code for i equals 3
    }
    System.out.println(i);
  }

  

// Output
// 1
// 2
// 4
// 5


When i is 3, the continue statement is encountered, causing the loop to skip the remaining code within the loop for that iteration. 
As a result, the value 3 is not printed, and the loop continues with the next iteration.




Description of Test Driven Development



In The Odin Project they joked about how it can be bad and time consumming to not have a test code to test against code you write.
With 2 + 2 this is not so bad. However, with more complex problems you would have to run through your code again and again and again and so on,
just to see if you ran into any bugs. With having test code made first you can write code to make it easier to find the bugs early.

in other words TDD is:

Write a Test: 
The development process starts by writing a test case that defines the desired behavior or functionality of the code. 
This test initially fails because the code to fulfill the test has not been implemented yet.

Run the Test: 
The test is executed to ensure that it fails. 
This step confirms that the test is valid and correctly identifies the missing functionality.

Write Code: 
The next step is to write the code that will fulfill the requirements outlined by the test. 
The goal is to write the minimum amount of code necessary to pass the test.

Run All Tests: 
After writing the code, all existing tests, including the new one, are executed. 
The purpose is to ensure that the newly written code doesn't break any existing functionality.

Refactor Code: 
If the tests pass, the developer can refactor the code—improve its design, readability, and performance—without changing its functionality. 
The tests act as a safety net, giving the developer confidence in making changes.

Repeat: 
The cycle continues by writing another test for a new feature or modifying an existing one, 
followed by writing the code to pass the test, running all tests, and refactoring if necessary.