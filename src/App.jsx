//https://react.dev/learn
import { useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';

import SkillList from './SkillList/SkillList';
import NewSkillForm from './NewSkillForm/NewSkillForm';


function App() {
  const [skills, setSkills] = useState ([ // initialize the skills state. With this it has the potential to be updated
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
]);
  
 {/*"JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user" */}
  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skillItems={skills} />
      {/* pass the skills array to the SkillList component as a prop named skillItems*/}
      {/* this is how  data gets passed down from the App component (parent) to the SkillList component (child)*/}
       {/* skillItems prop in SkillList is then used to dynamically create a list of SkillListItem components, one for each skill in the array */}
       {/*Props: short for properties, a way of passing data from parent components to child components (skillItems is a prop passed to SkillList) */}
      <hr />
      <NewSkillForm />
       {/* no props passed */}
    </div>
  );
}

export default App;


