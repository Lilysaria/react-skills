import './NewSkillForm.css';
import React from 'react';
//export default is before our function components so we can import it elsewhere in our app
export default function NewSkillForm() {
  // declare a component to handle form submission
  function handleSubmit(event) { // declare an event handler function named handleSubmit using function declaration
    event.preventDefault();//what does this do?
    // Accesses the 'skill' and 'level' input values from the form using the event.target reference
    // event.target points to the form element that triggered the handleSubmit function
    const skill = event.target.elements.skill.value;
    const level = event.target.elements.level.value;
    console.log('submitted skill:', skill);
    console.log('selected level:', level);
  }

  //this jsx code renders a form for the ui 
   // The handleSubmit function is assigned to the form's onSubmit event handler
  // When the form is submitted, the handleSubmit function will be invoked
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}> 
      <label>
        Skill:
        <input type="text" name="skill" />
      </label>
      <label>
        Level:
        <select name="level">
          <option value="">Select level</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <button type="submit">ADD SKILL</button>
    </form>
    </div>
  );
}
/* 
onSubmit is a special prop in React that is specifically designed to listen for submit events on a 
form element. This attribute tells React to set up an event listener for the submit event on this 
<form> element. */