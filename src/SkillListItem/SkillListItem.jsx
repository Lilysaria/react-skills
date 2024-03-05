import './SkillListItem.css'
export default function SkillListItem({ name, level }) {
    return (
      <li className="skill-container">
      {name} <span style={{ float: 'right' }}>{level}</span>
    </li>
    );
  }
  

/* the SkillListItem component takes a prop called text, which represents 
the text to display in the bullet point. Then, inside the <li> element, 
the {text} will render the value of the text prop. */

//now instead of text I put the values name and level and renamed text in SkillList to name