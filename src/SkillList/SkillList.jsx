import SkillListItem from "../SkillListItem/SkillListItem";

export default function SkillList({ skillItems }) {
  const skillListItems = skillItems.map((item, index) => (
    <SkillListItem key={index} text={item} />
  ));

  return (
    <ul>
      {skillListItems}
    </ul>
  );
}
