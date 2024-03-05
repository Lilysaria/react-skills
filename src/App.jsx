import { useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';

import SkillList from './SkillList/SkillList';
import NewSkillForm from './NewSkillForm/NewSkillForm';

function App() {
  const skillList1 = ['JavaScript', 'React', 'HTML'];
  const skillList2 = ['CSS', 'Node.js', 'Express'];

  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skillItems={skillList1} />
      <SkillList skillItems={skillList2} />
      <hr />
      <NewSkillForm />
    </div>
  );
}

export default App;
