// Getting Started With React

//? Topics Covered
//* React Components
//* What is JSX
//* Rendering Techniques
//* Keys in React
//* Passing Data Between Components.

//! 1:- COMPONENTS
/*
? What are Components?
* The beauty of React is it allows you to break the UI down into independent reusable chunks, which will refer to as components.
* Think of these reusable chunks as JavaScript functions which can take some kind of input and return a React Element.

? How to create Components?
* We created a functional Greeting Component in Components Folder inside the Project.
* The React components must be capitalized or they will not function as expected. which is why we capitalized Greeting().
? Why we should capitalized our React component?
* When the JSX is parsed, React uses the capitalization to tell the difference between an HTML tag and instance of a React component.
* <greeting /> would be interpreted as a normal HTML element with no special meaning, instead of your shiny new React component. 

*/

//! 2:- JSX
/*
 ? What is JSX?
 * JSX is a syntax extension for JavaScript that let's you write HTML-like syntax/markup inside a JavaScript file.
 * It's not required to use JSX when writing React components, but it does make writing them more concise.
 * JSX is a syntactic sugar for the React createElement function.
 * This function creates a React element, which is a plain object, so JSX compiles down to plain JavaScript objects.
 
 ? Let's talk about createElement React function.
 * createElement let's you create a React element.
 * It serves as an alternative to writing JSX.
 * We pass 3 parameters inside createElement function
 * These parameters are (Type,props,..children)
 ?The type argument must be a valid React component type, such as tag name or React component(a function, a class, or a special component like Fragment):- It lets you group elements without a wrapper node. Grouping elements in Fragment has no effect on the resulting DOM; it is the same as if the elements were not grouped.
 *

 ? The props argument must either be an object or null. If you pass null, it will be treated the same as an empty object.
 * 

 ? Zero or more child nodes. They can be any React nodes, including React elements, strings, numbers, portals( lets you render some children into a different part of the DOM.), empty nodes(null, undefined, true, and false), and arrays of React nodes.

 * When you use JSX, you must start a tag with a capital letter to render your own custom component.
 * In other words, <Something /> is equivalent to createElement(Something), but <something /> is equivalent to createElement('something') (It's a string, so it will be treated as a built-in HTML tag) 
  
 * You should only pass children as multiple arguments to createElement if they are all statically known, like createElement('h1' , {} , child1, child2, child3).
  
 * If your children are dynamic, pass the entire array as the third argument: createElement('ul', {}, listItems). This ensures that React will warn you about missing keys for any dynamic lists.
 * For static lists, this is not necessary because they never reorder.
 
 * You must treat React elements and their props as immutable and never change their contents after creation. In development, React will freeze the returned element and its props property shallowly to enforce this.

 ? Why do we use JSX?
 * Most of the time in apps, rendering logic and markup are inherently coupled(linked), but we typically separate them by having our logic and markup in separate files. JSX allows React to separate concerns by containing both rendering logic and content in the sam place.(a component).
 * On the top of this, it's more intuitive, visual way to work with the UI inside your code, and allows React to show more useful error and warning messages.
 
 ? Closing all tags
 * In HTML, many tags are self-closing and self-wrapping. In JSX however, we must explicitly close and wrap these tags.
 * <input> would become <input />, and <li> would become <li><li/>.

 ? camelCase Most things
 * JSX turns into JavaScript, and attributes of elements become keys of JavaScript objects, so you can't use dashes or reserved words such as class. 
 * Because of this, many HTML attributes are written in camelCase.
 * Instead of stroke-width, you'd use strokeWidth, and instead of class you'd use className.
 
  
 

 ? The Rules of JSX
 *
 ? Return a single root element.
 * To return multiple elements from a component, wrap them with a single parent tag.
 * If you don't want to add an extra <div> to your markup, you can write <> </> instead.
 *  This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.
 
 ? Why do multiple JSX tags need to be wrapped?
 * JSX looks like HTML, but under the hood it is transformend into plain JavaScript objects.
 * You can't return two objects from a function without wrapping them into an array.
 * This explains why you also can't return two JSX tags without wrapping them into another tag or a Fragment.
 
 ? Close all the tags
 * JSX requires tags to be explicitly closed
 * Self-closing tags like <img> must become <img/>, and wrapping tags like <li> <li/>

 ? camelCase most of the things!
 *  JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.
 * In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names.
 * Such as, thier names can't contain dashes or be reserved words like class.
 * This is why, in React, many HTML and SVG attributes are written in camelCase.
 * Instead of stroke-width you use strokeWidth.
 * Since class is a reserved word, in React you write className instead.
 

 ? Pro-tip: Use a JSX Converter
 * Converting all these attributes in existing markup can be tedious! We recommend using a converter to translate your existing HTML and SVG to JSX.
 * Converters are very useful in practice, but it still worth understanding what is going on so that you can comfortably write JSX on you own.
 
 
 ? Recap
 * React components group rendering logic together with markup because they are related.
 * JSX is similar to HTML, with few differences. You can use a converter if you need to.
 * Error messages will often point you in the right direction to fixing your markup.
 */
