//handleAddNewSkill updates the state in app.jsx.. i think
//https://react.dev/learn/reacting-to-input-with-state
//https://react.dev/learn/passing-props-to-a-component
import { useState } from 'react'
import './NewSkillForm.css';
import React from 'react';
//export default is before our function components so we can import it elsewhere in our app
export default function NewSkillForm({handleAddNewSkill}) {
    const [skillName, setSkillName] = useState('') // this is creating a piece of state called skillName with a setter function 
    const [skillLevel, setSkillLevel] = useState('3');

    function handleNameChange(e){  // i think i need to add to this one mostly
		console.log(e.target.value)
		setSkillName(e.target.value) //updates skillName whenever the user types into the skill name input field
    //This means skillName holds whatever text the user has entered into that input field.
	}
  //same for level
  function handleLevelChange(e){  // i think i need to add to this one mostly
		console.log(e.target.value)
		setSkillLevel(e.target.value)
	}
  // declare a component to handle form submission
  function handleSubmit(e) { // declare an event handler function named handleSubmit using function declaration
    e.preventDefault();//prevents page from reloading // do i change this?
    //handleSubmit is where a lot happens . it calls handleAddNewSkill
    //it calls setSkillName('');  reseting the input field
    
    // Accesses the 'skill' and 'level' input values from the form using the event.target reference
    // event.target points to the form element that triggered the handleSubmit function
    handleAddNewSkill({ name: skillName, level: parseInt(skillLevel, 10) });

    // Reset skill name and level state to initial values after submission
    setSkillName('');
    setSkillLevel('3');
  
  }

  //this jsx code renders a form for the ui 
   // The handleSubmit function is assigned to the form's onSubmit event handler
  // When the form is submitted, the handleSubmit function will be invoked
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}> 
      <label>
        Skill:
        <input type="text" name="name" value={skillName} onChange={handleNameChange} /> {/* // i think my atrributes(props?) are wrong */}
      </label>
      <label>
        Level:
        <select name="level" value={skillLevel} onChange={handleLevelChange}>
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