Document Object Module (DOM)

Document Object Model (DOM) is a programming interface for HTML and XML documents. 
It represents the structure of a web page as a hierarchical tree of objects. 
JavaScript can manipulate the DOM to dynamically modify the content and appearance of web pages.





Query Selectors

Query selectors allow you to select elements from the DOM using CSS-style selectors. 

The following methods can be used to select elements:

    'document.querySelector(selector)': Returns the first element that matches the given CSS selector.

    'document.querySelectorAll(selector)': Returns a NodeList containing all elements that match the given CSS selector.


Examples:

const element = document.querySelector('#myElement');
const elements = document.querySelectorAll('.myClass');






Element Creation


You can create new elements using the document.createElement(tagName) method. 
This method creates a new element with the specified tag NAME. //Had to all caps 'name' or it would have a line through it.


Example:

const newElement = document.createElement('div');





Appending Elements


To add an element as a child of another element, you can use the parentElement.appendChild(childElement) method. 
This will append the child element at the end of the parent element's list of children.


Example:

const parentElement = document.querySelector('#parent');
parentElement.appendChild(newElement);





Removing Elements

To remove an element from the DOM, you can use the parentElement.removeChild(childElement) method. 
This removes the specified child element from its parent.


Example:

const parentElement = document.querySelector('#parent');
parentElement.removeChild(childElement);






Altering Elements

You can modify various properties of an element to change its appearance or behavior. 
Some common properties include:


    element.textContent: Sets or retrieves the text content of an element.
    
    element.innerHTML: Sets or retrieves the HTML content of an element.
    
    element.style: Provides access to the inline style of an element.


Examples:

const element = document.querySelector('#myElement');
element.textContent = 'New text';
element.innerHTML = '<b>Bold text</b>';
element.style.color = 'red';





Editing Attributes

To modify an element's attributes, you can use the element.setAttribute(name, value) method. 
This sets the value of the specified attribute.


Example:

const element = document.querySelector('#myElement');
element.setAttribute('data-custom', 'value');






Working with Classes

Elements can have one or more CSS classes associated with them. 
You can manipulate these classes using the element.classList property.


    element.classList.add(className): Adds the specified class to the element.
    
    element.classList.remove(className): Removes the specified class from the element.
    
    element.classList.toggle(className): Toggles the presence of the specified class on the element.


Examples:

const element = document.querySelector('#myElement');
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');






Adding Text Content

To add or modify the text content of an element, you can use the element.textContent property. 
This sets or retrieves the text content of the element.


Example:

const element = document.querySelector('#myElement');
element.textContent = 'New text content';






Adding HTML Content

If you want to add or modify the HTML content of an element, you can use the element.innerHTML property. 
This sets or retrieves the HTML content of the element.


Example:

const element = document.querySelector('#myElement');
element.innerHTML = '<b>Bold text</b>';






Deferring a <script> until a page loads:

Sometimes it is beneficial to defer the execution of a <script> tag until after the page has finished loading. 
This allows the rest of the page to be rendered without waiting for the script to load and execute.

You can go about this in two different ways

The first being using the 'defer' attribute:

The defer attribute is a simple and effective way to defer the execution 
of a <script> tag until after the page has finished loading.
By adding the defer attribute to the <script> tag, the browser will continue parsing and rendering the HTML document without waiting for the script to load. 
The script will then be executed in the order they appear in the document, after the entire page has finished loading.
It's important to note that the defer attribute only works for external scripts, specified by the src attribute. 
Inline scripts, i.e., scripts defined within the HTML file using <script>...</script>, are not affected by the defer attribute.


Example:

<script src="script.js" defer></script>


The second being dynamically adding the script tag:

Another approach is to dynamically create and add the <script> tag to the DOM using JavaScript. By adding the script dynamically, you have more control over when it is executed.
By deferring the execution of the <script> tag until after the page has loaded, you can improve the overall performance and user experience of your web page. 
Choose the approach that best fits your needs and consider using the defer attribute whenever possible, as it provides a simple and widely supported solution.


Example:

<script>
  function loadScript(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    script.defer = true;
    script.onload = callback;
    document.body.appendChild(script);
  }

  // Usage
  loadScript('script.js', function() {
    // Code to be executed after the script has loaded
  });
</script>


In this example, the loadScript function is defined to dynamically create a <script> tag, 
set the src attribute to the desired script URL, 
and append it to the <body> element. 
The defer attribute is set to true to defer execution.
Additionally, 
an onload callback function is provided, which will be called once the script has finished loading. 
This allows you to execute code or perform actions that depend on the loaded script.






Additional DOM methods outside The Odin Project


getElementsByTagName(tagName)

The getElementsByTagName(tagName) method returns a live HTMLCollection of elements with the given tag name. 
It searches for elements that match the specified tag name within the entire document or within a specific element.


Example:

const elements = document.getElementsByTagName('div');





getElementsByClassName(className)

The getElementsByClassName(className) method returns a live HTMLCollection of elements that have the specified class name. 
It searches for elements that have the exact specified class name within the entire document or within a specific element.


Example:

const elements = document.getElementsByClassName('myClass');






getElementById(id)

The getElementById(id) method returns the element with the specified ID. 
It searches for an element that has the exact specified ID within the entire document.


Example:

const element = document.getElementById('myElement');






Events

Events are actions or occurrences that happen in the browser, such as a user clicking a button, the page finishing loading, or the user moving the mouse. 
JavaScript allows you to respond to these events by attaching event handlers to specific elements or the document itself. 
Event handling enables you to create interactive web applications.



3 methods for implementing 'onClick' functions

1st, Inline event handler:

In this method, you specify the function directly in the onclick attribute of the HTML element.


Example:

<button onclick="myFunction()">Click me</button>




2nd, DOM property

In this method, you access the button element using its ID and assign the onclick property to a function.


Example:

<button id="myButton">Click me</button>
<script>
  document.getElementById('myButton').onclick = function() {
    // Code to be executed when the button is clicked
  };
</script>




3rd, Event Listener

In this method, you use the addEventListener method to attach a click event listener to the button.


Example:

<button id="myButton">Click me</button>
<script>
  document.getElementById('myButton').addEventListener('click', function() {
    // Code to be executed when the button is clicked
  });
</script>






Passing a parameter into your event listener function


Sometimes you may need to pass a parameter to your event listener function. 
To achieve this, you can use an anonymous function or a wrapper function.


Example using anonymous function:


document.getElementById('myButton').addEventListener('click', function() {
    myFunction(parameter);
  });

  


Example using wrapper function:


document.getElementById('myButton').addEventListener('click', wrapperFunction);

function wrapperFunction() {
  myFunction(parameter);
}





Attaching listeners to a group of NodeList

If you have a group of similar elements and want to attach event listeners to all of them, 
you can use a loop to iterate over the elements and attach the listeners individually.


In this example, the querySelectorAll method is used to select all elements with the class myButtons. 
Then, the forEach method is used to iterate over the buttons and attach a click event listener to each one.


Example:

<button class="myButtons">Button 1</button>
<button class="myButtons">Button 2</button>
<button class="myButtons">Button 3</button>
<script>
  const buttons = document.querySelectorAll('.myButtons');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Code to be executed when any button in the group is clicked
    });
  });
</script>






Some useful events besides "click"

1. keydown and keyup:

    keydown: Triggered when a key is pressed down.
    keyup: Triggered when a key is released.

2. mouseenter and mouseleave:

    mouseenter: Triggered when the mouse pointer enters an element.
    mouseleave: Triggered when the mouse pointer leaves an element.

3. mouseover and mouseout:

    mouseover: Triggered when the mouse pointer is moved onto an element.
    mouseout: Triggered when the mouse pointer is moved off from an element.

4.submit:

    submit: Triggered when a form is submitted.
    
5.change:
    
    change: Triggered when the value of an input or select element changes.
    
6.focus and blur:
    
    focus: Triggered when an element receives focus.
    blur: Triggered when an element loses focus.
    
7.scroll:
    
    scroll: Triggered when an element's scrollbar is scrolled.
    
8.load:
    
    load: Triggered when a page or an element finishes loading.
    
9.resize:
    
    resize: Triggered when the browser window or an element is resized.
    
10.contextmenu:
    
    contextmenu: Triggered when the right mouse button is clicked to open the context menu.

11.dblclick:
    
    dblclick: Triggered when an element is double-clicked.



