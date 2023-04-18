import { HardSkills } from "./style";

interface HardSkillProps {
  title: string;
  content: string;
  width?: number;
}

export const HardSkillsComponent = ({
  title,
  content,
  width,
}: HardSkillProps) => {
  return (
    <HardSkills width={width}>
      <div>
        <span>
          <div>{title}</div>
        </span>
        <p>{content}</p>
      </div>
    </HardSkills>
  );
};
