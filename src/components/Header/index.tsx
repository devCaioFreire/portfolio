import { CaretDown, GitBranch } from "phosphor-react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import Logo from "../../assets/frPurple.svg";
import {
  AsideContainer,
  HeaderContainer,
  HeaderLeftSide,
  NavContainer,
} from "./style";

export function Header() {
  return (
    <>
      <AsideContainer>
        <a href="https://www.linkedin.com/in/caiofreire/">
          <RxLinkedinLogo size={32} />
        </a>
        <a href="https://github.com/devCaioFreire">
          <RxGithubLogo size={32} />
        </a>
      </AsideContainer>
      <HeaderContainer>
        <HeaderLeftSide>
          <img src={Logo} />
          <h3>Portfolio | Caio Freire</h3>
        </HeaderLeftSide>

        <NavContainer>
          <ul>
            <li>
              <a href="#">
                <span>#</span>home
              </a>
            </li>
            <li>
              <a href="#">
                <span>#</span>projetos
              </a>
            </li>
            <li>
              <a href="#">
                <span>#</span>sobre-mim
              </a>
            </li>
            <li>
              <a href="#">
                <span>#</span>contato
              </a>
            </li>
            <li>
              <a href="#">
                pt-BR <CaretDown size={18} />
              </a>
            </li>
          </ul>
        </NavContainer>
      </HeaderContainer>
    </>
  );
}
