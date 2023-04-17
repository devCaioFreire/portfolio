import { AboutContainer, AboutTextContent, ImageContainer } from "./style";
import AboutImage from "../../assets/AboutImage.png";

export function About() {
  return (
    <AboutContainer>
      <header>
        <h1>
          <span>#</span>sobre-mim
        </h1>
      </header>

      <div>
        <AboutTextContent>
          <p>Hello, i’m Caio!</p>
          <p>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>

          <button>Ver mais {"->"}</button>
        </AboutTextContent>

        <ImageContainer>
          <img src={AboutImage} draggable='false' />
        </ImageContainer>
      </div>
    </AboutContainer>
  );
}
