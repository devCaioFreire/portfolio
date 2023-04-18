import {
  HardSkillsContent,
  SkillImageContainer,
  SkillsContainer,
} from "./style";
import SkillsImage from "../../../assets/SkillsImage.png";
import { HardSkillsComponent } from "./components";

export function SkillSession() {
  return (
    <SkillsContainer>
      <div>
        <h1>
          <span>#</span>skills
        </h1>
        <SkillImageContainer>
          <img src={SkillsImage} draggable="false" />
        </SkillImageContainer>
      </div>

      <HardSkillsContent>
        <div>
          <HardSkillsComponent
            title="Linguagens"
            content="TypeScript JavaScript"
            width={13.8}
          />
        </div>
        <div>
          <HardSkillsComponent
            title="Frameworks"
            content="React-Native Next.JS Express.JS Electron.JS"
            width={14.4}
          />
          <HardSkillsComponent
            title="Banco de Dados"
            content="SQL  MongoDB  Firebase"
            width={14.4}
          />
        </div>
        <div>
          <HardSkillsComponent
            title="Bibliotecas"
            content="React.JS Axios Stitches Styled-Components"
            width={15}
          />
          <HardSkillsComponent
            title="Ferramentas"
            content="VSCode  Figma  Photoshop  Illustrator"
            width={15}
          />
        </div>
      </HardSkillsContent>
    </SkillsContainer>
  );
}
