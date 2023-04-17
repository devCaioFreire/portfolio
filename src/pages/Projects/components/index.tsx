import { Project, ProjectInfo, ProjectsCards } from "./style";

interface CardProps {
  techs: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProjectCard({
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
