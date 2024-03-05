import React, { useState } from 'react';

export default function NewSkillForm() {
  // State to manage form inputs
  const [skill, setSkill] = useState('');
  const [level, setLevel] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission logic
    // For example, you can pass the skill and level data to a parent component
    console.log('Submitted skill:', skill);
    console.log('Selected level:', level);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Skill:
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
      </label>
      <label>
        Level:
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
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
  );
}
