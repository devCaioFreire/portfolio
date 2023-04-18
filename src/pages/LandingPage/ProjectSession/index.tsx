import {
  ProjectsContainer,
  ProjectHeader,
  ProjectsCards,
  Project,
  ProjectInfo,
} from "./style";

import projectImage1 from "../../../assets/project1.jpg";
import projectImage2 from "../../../assets/project2.png";
import projectImage3 from "../../../assets/project3.png";
import { Link } from "react-router-dom";

export function ProjectSession() {
  return (
    <ProjectsContainer id="project">
      <ProjectHeader>
        <h1>
          <span>#</span>projects
        </h1>
        <Link to="/project" onClick={() => window.scrollTo(0, 0)}>
          Ver mais <span>{"~~>"}</span>
        </Link>
      </ProjectHeader>

      <ProjectsCards>
        <Project>
          <img src={projectImage1} width={"100%"} />
          <p>TypeScript React.JS Styled-Components</p>
          <ProjectInfo>
            <h1>Nome do App</h1>
            <p>Descrição da aplicação desenvolvida</p>
            <div>
              <a href="#">Produção {"<~>"}</a>
              <a href="#">Repositório {">="}</a>
            </div>
          </ProjectInfo>
        </Project>

        <Project>
          <img src={projectImage2} width={"100%"} />
          <p>TypeScript React.JS Styled-Components</p>
          <ProjectInfo>
            <h1>Nome do App</h1>
            <p>Descrição da aplicação desenvolvida</p>
            <div>
              <a href="#">Produção {"<~>"}</a>
              <a href="#">Repositório {">="}</a>
            </div>
          </ProjectInfo>
        </Project>

        <Project>
          <img src={projectImage3} width={"100%"} />
          <p>TypeScript React.JS Styled-Components</p>
          <ProjectInfo>
            <h1>Nome do App</h1>
            <p>Descrição da aplicação desenvolvida</p>
            <div>
              <a href="#">Produção {"<~>"}</a>
              <a href="#" target="_blank">
                Repositório {">="}
              </a>
            </div>
          </ProjectInfo>
        </Project>
      </ProjectsCards>
    </ProjectsContainer>
  );
}
