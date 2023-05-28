Script tag to include JQuery library in your webpage

To include the jQuery library in your webpage, you can use the following script tag in the <head> section of your HTML file.
Make sure to place this script tag before any other JavaScript code that depends on jQuery.


Example:

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>








How to use .ready()

The .ready() function in jQuery allows you to specify a function to be executed when the DOM (Document Object Model) is fully loaded. 
This ensures that your code runs only after the entire HTML document has been parsed and is ready to be manipulated.


Example:

$(document).ready(function() {
  // Your code goes here
});



There's also a shorthand version you can use:


Example:

$(function() {
  // Your code goes here
});








How to use JQuery selectors

jQuery selectors are used to select and manipulate HTML elements.



By Element

To select elements by their tag NAME


Example:

$('elementName')


To select all elements you would use '<p>'


Example:

$('p')






By ID

Use the following syntax to select an element by its ID attribute


Example:

$('#idValue')



To select an elemeent with the ID "myElement"


Example:

$('#myElement')








By Class

To select elements by their class attribute, use the following syntax


Example:

$('.className')


To select all elements with the class "myClass"


Example:

$('.myClass')








Selecting multiple targets

You can select multiple targets by combining multiple selectors or by separating them with commas.$


Example:

$('selector1, selector2, selector3')



To select all <h1> and <h2> elements


Example:

$('h1, h2')





This will return a jQuery object containing all the selected elements, allowing you to perform actions on all of them at once.




Note: The selected elements can also be filtered further using additional jQuery methods such as .filter(), .not(), or .slice().






How to use JQuery Events

jQuery is a JavaScript library that simplifies EVENT handling and DOM manipulation. 
It provides an easy-to-use API for adding interactivity to web pages.





.click()

The .click() event is triggered when an element is clicked by the user.


Syntax:

$(selector).click(function(){
   // Code to be executed when the element is clicked
});



Example:

HTML
<button id="myButton">Click Me</button>


JavaScript
$("#myButton").click(function(){
   alert("Button clicked!");
});








.mouseenter()

The .mouseenter() event is triggered when the mouse pointer enters the specified element.


Syntax:

$(selector).mouseenter(function(){
   // Code to be executed when the mouse enters the element
});



Example:

HTML
<div id="myDiv">Hover over me</div>


JavaScript
$("#myDiv").mouseenter(function(){
   $(this).text("Mouse entered");
});






.mouseleave()

The .mouseleave() event is triggered when the mouse pointer leaves the specified element.


Syntax:

$(selector).mouseleave(function(){
   // Code to be executed when the mouse leaves the element
});



Example:

HTML
<div id="myDiv">Hover over me</div>


JavaScript
$("#myDiv").mouseleave(function(){
   $(this).text("Mouse left");
});







How to use JQuery Effects





.show()

This method is used to display elements that were previously hidden. 
It animates the display property of the selected elements, making them visible.


Syntax:

$(selector).show(speed, callback);


In the syntax the,
selector: This parameter specifies the element(s) to be shown. It can be a class, ID, HTML element, or any valid CSS selector.
speed (optional): This parameter determines the speed of the animation. It can take values like "slow," "fast," or a specific duration in milliseconds.
callback (optional): This parameter is a function to be executed after the animation completes.


Example:

$(".element").show(); // Shows all elements with class "element"
$("#myDiv").show(1000); // Shows the element with ID "myDiv" over a duration of 1000 milliseconds
$(".element").show("slow", function() {
    // Callback function executed after the show animation completes
});







.hide()

This method is used to hide elements by animating the display property. 
It effectively reverses the effect of .show(). 
The syntax for using the .hide() method is similar to .show()


Syntax:

$(selector).hide(speed, callback);


Example:

$(".element").hide(); // Hides all elements with class "element"
$("#myDiv").hide(1000); // Hides the element with ID "myDiv" over a duration of 1000 milliseconds
$(".element").hide("fast", function() {
    // Callback function executed after the hide animation completes
});






.slideDown()

This method is used to animate the height of the selected elements, making them slide down and reveal their content. 
It shows elements that are initially hidden.


Syntax:

$(selector).slideDown(speed, callback);


Example:

$(".element").slideDown(); // Slides down all elements with class "element"
$("#myDiv").slideDown(1000); // Slides down the element with ID "myDiv" over a duration of 1000 milliseconds
$(".element").slideDown("slow", function() {
    // Callback function executed after the slide down animation completes
});






.slideUp()

This method is the opposite of .slideDown(). 
It animates the height of the selected elements, making them slide up and hide their content.


Syntax:

$(selector).slideUp(speed, callback);


Example:

$(".element").slideUp(); // Slides up all elements with class "element"
$("#myDiv").slideUp(1000); // Slides up the element with ID "myDiv" over a duration of 1000 milliseconds
$(".element").slideUp("fast", function() {
    // Callback function executed after the slide up animation completes
});






.toggle()

This method is used to toggle the visibility of elements. 
If an element is visible, it will be hidden, and if it is hidden, it will be shown.


Syntax:

$(selector).toggle(speed, easing, callback);

selector: This parameter specifies the element(s) to be toggled. It can be a class, ID, HTML element, or any valid CSS selector.
speed (optional): This parameter determines the speed of the animation. It can take values like "slow," "fast," or a specific duration in milliseconds.
easing (optional): This parameter specifies the easing function to be used for the animation. It can be a predefined string value or a custom easing function.
callback (optional): This parameter is a function to be executed after the animation completes.


Example:

$(".element").toggle(); // Toggles the visibility of all elements with class "element"
$("#myDiv").toggle(1000); // Toggles the visibility of the element with ID "myDiv" over a duration of 1000 milliseconds
$(".element").toggle("slow", "linear", function() {
    // Callback function executed after the toggle animation completes
});







.stop()

This method is used to stop the currently running animation on the selected elements. 
It can be used to interrupt and halt the animation before it completes.


Syntax:

$(selector).stop(clearQueue, jumpToEnd);


selector: This parameter specifies the element(s) on which to stop the animation. It can be a class, ID, HTML element, or any valid CSS selector.
clearQueue (optional): This parameter determines whether to clear the animation queue. If set to true, it clears the queue and stops the animation immediately. If set to false or omitted, it stops the animation but keeps the remaining animations in the queue.
jumpToEnd (optional): This parameter determines whether to jump to the end of the animation. If set to true, it stops the animation and jumps to the end state of the element. If set to false or omitted, it stops the animation at its current position.


Example:

$(".element").stop(); // Stops the animation on all elements with class "element"
$("#myDiv").stop(true, true); // Stops the animation on the element with ID "myDiv" and jumps to the end state





Chaining in JQuery

Is the technique of connecting multiple jQuery methods together in a single statement. 
This approach simplifies code readability and reduces the number of lines needed to perform multiple operations on the same set of elements.


Example:


$(selector)
  .method1()
  .method2()
  .method3();



Each method in the chain operates on the same set of elements selected by the initial selector. 
You can chain together as many methods as needed to achieve your desired functionality.


Example with chaining together:

$(".element")
  .addClass("highlight")
  .fadeOut(1000)
  .delay(500)
  .fadeIn(1000)
  .slideUp();



In the above example, the class "highlight" is added to all elements with the class "element." 
Then, a fade-out animation is applied for 1000 milliseconds, followed by a delay of 500 milliseconds. 
After that, a fade-in animation is applied for 1000 milliseconds, and finally, a slide-up animation is applied.






Callbacks

Are functions that are executed after a specific action or event has completed. 
In jQuery, callbacks are commonly used with animation methods to perform additional actions once the animation finishes. 
Callbacks are passed as parameters to the methods that support them.


Example:

$(selector).method(callback);



The callback function can be defined inline or as a separate function. 
It will be executed once the action or event completes.


Example with fade-out implemented to all elements:

$(".element").fadeOut(1000, function() {
  console.log("Fade out animation completed.");
  // Perform additional actions here
});


In the above example, the fade-out animation is applied to all elements with the class "element" for 1000 milliseconds. 
Once the animation completes, the provided callback function is executed, logging a message to the console.



!REMINDER!

Remember to include the jQuery library before using these techniques in your HTML document. 
You can download it from the official jQuery website or include it from a content delivery network (CDN). 

Using the following script tag:

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


Ensure that the jQuery library is loaded before executing any jQuery code!