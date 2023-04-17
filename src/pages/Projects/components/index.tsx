import {
  Project,
  ProjectInfo,
  ProjectSmallApp,
  ProjectsCards,
} from "./style";

interface CardProps {
  techs: string;
  title: string;
  description: string;
  image?: string;
  link: string;
  linkName?: string;
}

export function ProjectAppCard({
  techs,
  title,
  description,
  image,
  link,
}: CardProps) {
  return (
    <ProjectsCards>
      <Project>
        <img src={image} width={"100%"} />
        <p>{techs}</p>
        <ProjectInfo>
          <h1>{title}</h1>
          <p>{description}</p>
          <div>
            <a href={link} target="_blank">
              Produção {"<~>"}
            </a>
            <a href={link} target="_blank">
              Repositório {">="}
            </a>
          </div>
        </ProjectInfo>
      </Project>
    </ProjectsCards>
  );
}

export function ProjectCard({
  techs,
  title,
  description,
  link,
  linkName,
}: CardProps) {
  return (
    <ProjectsCards>
      <ProjectSmallApp>
        <span>{techs}</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link}>{linkName}</a>
        </div>
      </ProjectSmallApp>
    </ProjectsCards>
  );
}
