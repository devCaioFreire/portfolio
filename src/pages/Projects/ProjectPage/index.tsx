import {
  HeaderMain,
  ProjectContainer,
  ProjectHeader,
  ProjectsCardsContent,
} from "./style";

import projectImage1 from "../../../assets/project1.jpg";
import projectImage2 from "../../../assets/project2.png";
import projectImage3 from "../../../assets/project3.png";
import { ProjectCard } from "../components";

export function ProjectPage() {
  return (
    <ProjectContainer>
      <HeaderMain>
        <h1>
          <span>/</span>projects
        </h1>
        <p>Minha lista de projetos</p>
      </HeaderMain>

      <ProjectHeader>
        <h1>
          <span>#</span>complete-apps
        </h1>
      </ProjectHeader>

      <ProjectsCardsContent>
        <ProjectCard
          image={projectImage1}
          title="Project 1"
          description="Descrição da aplicação desenvolvida"
          techs="TypeScript React.JS Styled-Components"
          link="https://caiofreire.vercel.app"
        />
        <ProjectCard
          image={projectImage2}
          title="Project 2"
          description="Descrição da aplicação desenvolvida"
          techs="TypeScript React.JS Styled-Components"
          link="https://caiofreire.vercel.app"
        />
        <ProjectCard
          image={projectImage1}
          title="Project 3"
          description="Descrição da aplicação desenvolvida"
          techs="TypeScript React.JS Styled-Components"
          link="https://caiofreire.vercel.app"
        />
        <ProjectCard
          image={projectImage2}
          title="Project 4"
          description="Descrição da aplicação desenvolvida"
          techs="TypeScript React.JS Styled-Components"
          link="https://caiofreire.vercel.app"
        />
        <ProjectCard
          image={projectImage1}
          title="Project 5"
          description="Descrição da aplicação desenvolvida"
          techs="TypeScript React.JS Styled-Components"
          link="https://caiofreire.vercel.app"
        />
        <ProjectCard
          image={projectImage2}
          title="Project 6"
          description="Descrição da aplicação desenvolvida"
          techs="TypeScript React.JS Styled-Components"
          link="https://caiofreire.vercel.app"
        />
      </ProjectsCardsContent>
    </ProjectContainer>
  );
}
