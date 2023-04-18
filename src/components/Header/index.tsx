import { CaretDown } from "phosphor-react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import Logo from "../../assets/frPurple.svg";
import {
  AsideContainer,
  HeaderContainer,
  HeaderLeftSide,
  NavContainer,
} from "./style";
import { Link } from "react-router-dom";
import { handleScroll } from "../../util/smoothScroll";

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
        <Link to={"/"}>
          <HeaderLeftSide>
            <img src={Logo} />
            <h3>Portfolio | Caio Freire</h3>
          </HeaderLeftSide>
        </Link>

        <NavContainer>
          <ul>
            <li>
              <a
                href="home"
                onClick={(event) => handleScroll({ id: "home", event })}
              >
                <span>#</span>home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(event) => handleScroll({ id: "project", event })}
              >
                <span>#</span>projetos
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(event) => handleScroll({ id: "about", event })}
              >
                <span>#</span>sobre-mim
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(event) => handleScroll({ id: "contact", event })}
              >
                <span>#</span>contato
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => handleScroll({ id: "home", event })}
              >
                pt-BR <CaretDown size={18} />
              </a>
            </li>
          </ul>
        </NavContainer>
      </HeaderContainer>
    </>
  );
}
