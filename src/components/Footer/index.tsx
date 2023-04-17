import { FooterContainer, FooterHeader, FooterSocial } from "./styles";
import Logo from "../../assets/frPurple.svg";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

export function Footer() {
  return (
    <div style={{ borderTop: "1px solid #ABB2BF" }}>
      <FooterContainer>
        <FooterHeader>
          <div>
            <img src={Logo} />
            <h1>Portfolio | Caio Freire</h1>
          </div>

          <div>
            <p>Desenvolvedor front-end e mobile.</p>
          </div>
        </FooterHeader>

        <FooterSocial>
          <h1>Redes Sociais</h1>
          <div>
            <a href="https://www.linkedin.com/in/caiofreire/">
              <RxLinkedinLogo size={32} />
            </a>
            <a href="https://www.instagram.com/caiooff7/">
              <RxInstagramLogo size={32} />
            </a>
          </div>
        </FooterSocial>
      </FooterContainer>
    </div>
  );
}
