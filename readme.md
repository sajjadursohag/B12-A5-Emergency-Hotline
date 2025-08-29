1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById--> Selects one element, returns single element and its fastest method because IDs are unique.


getElementsByClassName--> Selects all elements and return HTMLCollection.


querySelector--> Selects the first element CSS Selector(id, class, tag)


querySelectorAll--> Selects all elements and return a Nodelist.


2.How do you create and insert a new element into the DOM?


Ans: Create the Element--> document.createElement("tagName)
Add Content and Insert into the DOM.


3.What is Event Bubbling and how does it work?

Ans: Event bubbling means that when an event happens on an element, it first runs the handler on that element, and then it "bubbles up" to its parent elements, all the way up to the document.


4.What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where instead of attaching event listeners to multiple child elements individually, you attach a single event listener to their parent.
Its Performance good, Dynamic Elements works for future elements and Cleaner Code.

5.What is the difference between preventDefault() and stopPropagation() methods

Ans:  preventDefault()--> Clicking Link, Submitting a form and right click.

event.stopPropagation()--> Only Button clicked logs. 