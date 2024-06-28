//? How to stucture state?
/*
 * Managing and structuring state effectively is by far one of the most crucial parts of building our application. If not done correctly, It will lead to bugs.
 * There is a rule for state which is: don't put values in state that can be calculated using existing values, state, or props.
 
! State should not be mutated:
 * State should not be mutated.
 * Primitives are already immutable
 * Arrays & objects(Reference-type), should not be mutated.
 * According to React Docs, we should treat states as if it was immutable.
 * To change the state, we should always use the setState function.
 
 ? Objects and arrays in state
  * In the example, we created a new object and then copy the existing state values into the new object while providing a new value for age.
  * If we don't provide a new object to setState, it is not guaranteed to re-render the page.
  * Therefore, we should always provide a new Object for setState to trigger a re-render.
  * setState uses Object.is() method to determine if the previous state is the same.(Returns true or false)
  * For nested objects and arrays, state can get tricky fast since you'll have to copy the nested item as well.
  
  
! How state updates:
 * State updates are asynchronous.
 * This implies is that whenever we call the setSate() function, React will apply the update in the next Component render not in the current state.
 
 * State variables aren't reactive, the component is.
 * Calling setState re-renders the entire component instead of just changing the state variable on the fly.



? Analysis of State Analysis Component
 * 1- The component renders for the first time. The person state variable is initialized to current state. The render log(cl('Durin render')) prints the state variable.
 * 2- The button is clicked invoking handleIncreaseAge. Interestingly, the console.log before and after the setPerson call prints the same value.
 * 3- The component re-renders. The person state variable is updated to {name"Abuzar", age:101}
 
* The person state stays the same throughout the curreny render of component. This is what "state as a snapshot" refers to.
* The setState call triggers a component re-render, and the person state is updated to the new value.



? State updater function:
 * Here's the example:
const handleIncreaseAge = () => {
  setPerson({ ...person, age: person.age + 1 });
  setPerson({ ...person, age: person.age + 1 });
};

 * It doesn't increase the age by 2.
 * The above code is saying to React:
  
 * "Hey, replace the current render's person with the increase in age by 1. Then , replace the current render's person with an increase in age by 1"
 * So it's telling to the same person.
 
* When we pass in the value to the setState function, React will replace the current state with the value we passed in.
* What if we want to update the state multiple times using the latest state?
* This is where the state updater function comes in: 
const handleIncreaseAge = () => {
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
};
 * When a callback(pervPerson) is passed to the setState function, it ensures that the latest state is passed in as an argument to the callback.
 * Using an updater is not always necessary. If we want to change the state using our previous state and and prefers consistency over verbosity, then we might consider using an updater.


? React batches state updates
 * There are two setPerson calls in the above example, and from what we've learned so far, a setState call triggers a component re-render.
 * So, the component should re-render twice, right?
 * It seems like yes, but React is smart.
 * Whenever possible, React batches the state updates.
 * Here, the component only re-renders once.
 * Because we have laerned about Batching which React define it in the reconciliation algorithm after the tree Diffing technique.
 * It batches(arranges in a set) the updates and re-render it once for effecient performance.
 
  

? Controlled components:
 * There are native HTML elements taht maintain thier own internal state.
 * The input element is a great example.
 * We tyoe into an input and it updates its own value on every keystroke.
 * For many usecases, we would like to control the value of the input element, i.e., set it's value ourself.
 * This is where controlled components come in.
function CustomInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
 * Instead of letting the input maintain its own state, we define our own state using the useState hook.
 * We then set the value prop of the input to the to the state variable and update the state variable on every onChange event.
 * Now every time the user types something in the input, React will ensure we have have the latest comment, review, or post(whatever the user was typing) in value.
 

* The pattern is extremely useful wherever we need user input, i.e, typing in a textbox, toggling a checkbox,etc.
* The input element can be left uncontrolled and access its value through some other method.
* We talked about it in the course.
 */
