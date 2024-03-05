import SkillListItem from "../SkillListItem/SkillListItem";

export default function SkillList({ skillItems }) {
  const skillListItems = skillItems.map((skill, index) => (
    <SkillListItem key={index} text={skill.name} />
  ));

  return (
    <ul>
      {skillListItems}
    </ul>
  );
}
/* //https://react.dev/learn
//Rendering lists[This is using different code but it is similiar to this]
Inside your component, use the map() function 
to transform an array of products into an array of <li> items.

Notice how <li> has a key attribute. For each item in a list, you should pass 
a string or a number that uniquely identifies that item among its siblings. Usually, 
a key should be coming from your data, such as a database ID. React uses your keys 
to know what happened if you later insert, delete, or reorder the items.
*/