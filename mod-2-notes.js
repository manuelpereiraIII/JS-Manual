// How to Declare Variables in JS

In JavaScript, variables can be declared using the keywords "var", "let", and "const".

"var" keyword:
Variables declared with the "var" keyword are function-scoped. 
They are accessible within the function in which they are declared, 
and also accessible outside of the function if they are declared outside of any function.

function myFunction() {
    var x = 5;
    console.log(x); // Output: 5
  }
  
  console.log(x); // Output: Uncaught ReferenceError: x is not defined

"let" keyword:
Variables declared with the "let" keyword are block-scoped. 
They are accessible within the block in which they are declared, including any nested blocks.

if (true) {
    let x = 5;
    console.log(x); // Output: 5
  }
  
  console.log(x); // Output: Uncaught ReferenceError: x is not defined

"const" keyword:
Variables declared with the "const" keyword are also block-scoped. 
They are similar to variables declared with "let", but cannot be reassigned once they are initialized.


const x = 5;
x = 6; // Output: Uncaught TypeError: Assignment to constant variable.


Naming Variables Properly:
Variable names should be descriptive and meaningful. 
They should start with a lowercase letter and follow the camelCase naming convention. 
Avoid using reserved keywords as variable names.


let firstName = "John";
const age = 30;
var isStudent = true;



// Operators

JavaScript supports a variety of operators for performing various operations on values. 
These include arithmetic operators, comparison operators, logical operators, and more.


Arithmetic Operators:

+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Modulus (Remainder)
++  Increment
--  Decrement


Example usage of arithmetic operators:

let x = 10;
let y = 5;
console.log(x + y); // Output: 15
console.log(x - y); // Output: 5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 2
console.log(x % y); // Output: 0 (remainder of 10 / 5 is 0)
console.log(x++);   // Output: 10 (the value of x is incremented by 1 after it is logged)
console.log(++y);   // Output: 6 (the value of y is incremented by 1 before it is logged)


"What happens when you use a + operator with a string and number (e.g. "24" + 2)"


let x = "24";
let y = 2;
console.log(x + y); // Output: "242"


Even if you reverse the order and use 2 + "24", 
JavaScript will still convert the number to a string and concatenate the values, producing the same result: "224".




// Working w/ Numbers

JavaScript has a built-in number data type that is used to represent numeric values. 
Numeric values can be integers or floating-point numbers.

NaN:
NaN (Not a Number) is a special value in JavaScript that represents an undefined 
or unrepresentable value resulting from an arithmetic operation. 
For example, dividing a number by 0 in JavaScript produces NaN. 
NaN is also produced when attempting to perform arithmetic operations with non-numeric values.


let x = "hello";
let y = 5;
console.log(x * y); // Output: NaN (can't multiply a string by a number)
console.log(0 / 0); // Output: NaN (undefined result of division by zero)


NaN is a unique value in JavaScript and cannot be compared with any other value, including itself. 
To check if a value is NaN, you can use the isNaN() function.

let x = NaN;
console.log(isNaN(x)); // Output: true
console.log(isNaN("hello")); // Output: true (string is not a valid number)
console.log(isNaN(42)); // Output: false (42 is a valid number)


It's important to note that NaN is not equal to any value, including itself. 
This means that NaN !== NaN will return true. 
To check if a value is NaN, you should use the isNaN() function instead of comparing it to NaN directly.




// Working w/ Strings

In JavaScript, strings are used to represent text. 
They can be created using single quotes, double quotes, or backticks. 
Backticks are used for template literals, which allow for the embedding of expressions and variables within a string.

Escaping characters:

Some characters are reserved in JavaScript and cannot be used within a string without being escaped. 
To escape a character, you can use the backslash () before the character.


let str = "She said \"hello\" to me.";
console.log(str); // Output: She said "hello" to me.


Template literals (backticks and variables!):

Template literals are a new way to create strings in JavaScript. 
They are enclosed by backticks "(`)" and allow for the embedding of expressions and variables within the string using the ${} syntax.
        //Note: had to add the "   " above or the rest of the notes were all in orange for some reason

let name = "john"; 
console.log(`Hello, my name is ${name}.`); // Output: Hello, my name is John.


Methods for working with strings:

JavaScript provides several built-in methods for working with strings. Here are some of the most commonly used ones:

slice(start, end): returns a portion of the string between the start and end positions.
substring(start, end): returns a portion of the string between the start and end positions.
replace(searchValue, replaceValue): replaces occurrences of searchValue in the string with replaceValue.
toUpperCase(): converts the string to all uppercase letters.
toLowerCase(): converts the string to all lowercase letters.
concat(str1, str2, ..., strN): concatenates one or more strings with the original string.
trim(): removes whitespace from the beginning and end of the string.
padStart(targetLength, padString): pads the string with the padString at the beginning until the string reaches the targetLength.
charAt(index): returns the character at the specified index in the string.

let str = "Hello, world!";
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.replace("world", "John")); // Output: Hello, John!
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.trim()); // Output: Hello, world!
console.log(str.padStart(20, "-")); // Output: -----Hello, world!
console.log(str.charAt(0)); // Output: H


How to convert a string to an array:

You can convert a string to an array in JavaScript using the split() method, 
which splits the string into an array of substrings based on a specified separator. 
The separator can be a string or a regular expression.

let str = "apple,banana,orange";
let arr = str.split(",");
console.log(arr); // Output: ["apple", "banana", "orange"]



// Conditional Statements


Comparison operators are used in JavaScript to compare two values and return a Boolean value 
(true or false) based on the comparison. Here are the comparison operators in JavaScript:

"5" == 5      // true (the string "5" is converted to the number 5)
"5" === 5     // false (strict equality check fails, since the types are different)
"5" != 5      // false (the string "5" is converted to the number 5)
"5" !== 5     // true (strict inequality check succeeds, since the types are different)
"hello" == 0  // false (the string "hello" cannot be converted to a number)
"hello" != 0  // true (the string "hello" cannot be converted to a number)
true == 1     // true (the boolean value true is converted to the number 1)
false == 0    // true (the boolean value false is converted to the number 0)


Comparison of Strings:
When comparing strings in JavaScript, the comparison is done based on the Unicode values of the characters in the strings. 
The characters are compared one by one, starting from the first character of each string until a mismatch is found. 
If a mismatch is found, the comparison stops and the result is determined based on the Unicode values of the mismatched characters.

Comparison of Different Data Types:
JavaScript is a dynamically typed language, which means that variables can hold values of different data types. 
When comparing values of different data types, JavaScript tries to convert them to a common data type before making the comparison. This is called type coercion.

Strict Equality Operators (===, !==):
The strict equality operators (===, !==) compare two values for both their value and their data type. 
They return true if the values are equal and of the same data type, and false otherwise.


Regular Equality Operators (==, !=):
The regular equality operators (==, !=) compare two values for their value only, and not their data type. 
They return true if the values are equal after type coercion, and false otherwise.

Conditional Statements (if, else, else if):
Conditional statements in JavaScript are used to execute different code blocks 
based on whether a certain condition is true or false. 
The most basic conditional statement is the if statement, which executes a code block if a condition is true. 
The else statement is used to execute a different code block if the condition is false. 
The else if statement is used to check for additional conditions if the previous conditions were false.

Logical Operators (||, &&, !):
Logical operators in JavaScript are used to combine multiple conditions in a single expression. 
The || (OR) operator returns true if either of the conditions is true. 
The && (AND) operator returns true only if both of the conditions are true. 
The ! (NOT) operator returns the opposite of the boolean value of a condition.

Switch Statements:
A switch statement in JavaScript is used to execute different code blocks based on the value of an expression. 
The expression is evaluated once, and the value is compared to each case label in the switch statement. 
If a match is found, the corresponding code block is executed.

The ternary operator in JavaScript provides a shorthand way of writing an if-else statement. 
It is often used when we need to assign a value to a variable based on a certain condition.

Here, condition is the condition to be tested, value1 is the value assigned if the condition is true, 
and value2 is the value assigned if the condition is false.
(condition) ? value1 : value2



In this example, the condition x > 5 is true, so the value of y is assigned to "Greater than 5". 
If the condition had been false, the value of y would have been assigned to "Less than or equal to 5".
let x = 10;
let y = (x > 5) ? "Greater than 5" : "Less than or equal to 5";
console.log(y);



In this example, the first condition x > 5 is true, so the nested ternary operator is evaluated. 
The second condition x < 20 is also true, so the value of y is assigned to "Between 5 and 20".
let x = 10;
let y = (x > 5) ? ((x < 20) ? "Between 5 and 20" : "Greater than or equal to 20") : "Less than or equal to 5";
console.log(y);



Functions:
Functions in JavaScript are blocks of code that can be defined and called later in the code. 
They can take in parameters and return values. 
Functions are an essential part of JavaScript programming as they allow for code reuse and help to make the code more organized.

Invoking functions:
To invoke a function in JavaScript, you simply call it by its name followed by parentheses containing any arguments it requires. 

For example:

function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // Output: 5




Defining functions:
To define a function in JavaScript, you use the function keyword followed by the function name, any parameters it takes, and the function body. 

For example:

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('John'); // Output: Hello, John!




Anonymous functions:
Anonymous functions are functions that do not have a name. 
They are often used as callback functions or as IIFE's (Immediately Invoked Function Expressions). 

For example:

let add = function(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // Output: 5





Arrow functions:
Arrow functions are a shorthand way of defining functions in JavaScript. 
They use the => syntax and are often used for simple functions or as callbacks. 

For example:

let add = (a, b) => a + b;

let result = add(2, 3);
console.log(result); // Output: 5





Scope:
Scope refers to the visibility of variables within a program. 
JavaScript has two types of scope: global scope and local scope. 
Global scope variables can be accessed from anywhere in the program, 
while local scope variables are only accessible within the function they were defined in.





Return values:
Functions can return values using the return keyword. 
The value that is returned can be used in other parts of the program. 

For example:

function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // Output: 5




Default values:
Default values allow you to provide a default value for a function 
parameter in case one is not provided when the function is called. 

For example:

function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, World!
greet('John'); // Output: Hello, John!






Call Stack:
The call stack is a data structure used by JavaScript to keep track of the order in which functions are called. 
When a function is called, it is added to the top of the call stack, and when it returns, it is removed from the stack.




Problem Solving:

Effective problem solving in Java requires a strong understanding of Java programming concepts, 
data structures, algorithms, and best practices. It also involves the ability to think logically, 
analyze problems, and develop efficient and effective solutions.

These steps include:

1. Define the problem: Identify the problem to be solved and define it clearly.

2. Analyze the problem: Break down the problem into smaller, more manageable parts and determine the requirements and constraints.

3. Design a solution: Develop an algorithmic solution to the problem using Java programming constructs.

4. Implement the solution: Write the Java code to implement the algorithmic solution.

5. Test the solution: Test the Java code to ensure that it solves the problem correctly and meets the requirements.

6. Refine the solution: Refine the Java code as necessary to improve its performance or meet additional requirements.

7. Document the solution: Document the Java code and the problem-solving process to make it easier to understand and maintain.

When I had Professor Hanson for my first few programming classes he said most of the time coders aren't coding. They'll be given a problem,
and have to figure out how best to approach the problem given to them. He prefered charts, lots of charts.




JavaScript errors:

Understanding errors is an essential part of programming in any language, including JavaScript. 
Errors in JavaScript are issues that occur when the code is executed, and they prevent the program from working correctly. 
Therefore, it is essential to understand and address errors in JavaScript code to ensure the code runs smoothly.

The different types of JavaScript Errors are:

Syntax Errors: 
Syntax errors occur when the code is not written correctly, i.e., when there is an issue with the syntax of the code. 
This type of error is often caused by a missing or misplaced character or a typo in the code.

Example of a syntax error:

public class SyntaxErrorExample {
  public static void main(String[] args) {
    int x = 5;
    System.out.println("The value of x is: " + x);
    // Syntax error: missing semicolon
    int y = x * 2
    System.out.println("The value of y is: " + y);
  }
}



Runtime Errors: 
Runtime errors occur when the code is executing, and the program encounters an issue. 
This can be caused by a variety of issues such as division by zero, null references, or out-of-range array indices.


public class Main {
  public static void main(String[] args) {
      int x = 10;
      int y = 0;
      int z = x / y;  // division by zero
      System.out.println("Result: " + z);
  }
}

// the value of y is 0, which is not a valid divisor
//When the program executes this line of code, it will throw a runtime error called ArithmeticException



Logic Errors: 
Logic errors occur when the code runs without error, but it does not produce the expected results. 
This can happen when there is an issue with the algorithm or the logic used in the code.


public class Main {
  public static void main(String[] args) {
      int x = 10;
      int y = 5;
      int z = x + y * 2;  // should be x + y + 2
      System.out.println("Result: " + z);
  }
}




Type Errors: 
Type errors occur when the program tries to use a value of the wrong data type. 
This can happen when there is a mismatch between the expected and actual data types of a value.


public class Main {
  public static void main(String[] args) {
      int x = 10;
      String s = "Hello";
      int z = x + s;  // Type error: cannot add string and int
      System.out.println("Result: " + z);
  }
}





Reference Errors: Reference errors occur when the program tries to access a variable or object that does not exist or is out of scope.
Range Errors: Range errors occur when the program tries to use a value that is out of range, such as an array index that is too high or too low.

public class Main {
  public static void main(String[] args) {
      int[] arr = {1, 2, 3};
      int x = arr[3];  // Reference error: index out of bounds
      System.out.println("Result: " + x);
  }
}




