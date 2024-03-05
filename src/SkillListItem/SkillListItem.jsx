import './SkillListItem.css'
export default function SkillListItem({ text }) {
    return (
      <li>{text}</li>
    );
  }
  

/* the SkillListItem component takes a prop called text, which represents 
the text to display in the bullet point. Then, inside the <li> element, 
the {text} will render the value of the text prop. */

