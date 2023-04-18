import { HomeContainer, HomeImageContainer, HomeText } from "./style";
import HomeImage from "../../../assets/HomeImage.png";

export function HomeSession() {
  return (
    <HomeContainer id="home">
      <HomeText>
        <h1>
          Olá, me chamo Caio Freire! <span>Sou desenvolvedor front-end </span>e{" "}
          <span>mobile</span>
        </h1>
        <p>Desenvolvo aplicações para WEB e para Smartphones</p>
        <button>Contate-me!</button>
      </HomeText>
      <HomeImageContainer>
        <img src={HomeImage} alt="" draggable="false" />
        <p>Never Stop Learning</p>
      </HomeImageContainer>
    </HomeContainer>
  );
}
