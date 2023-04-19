import { useState, useEffect } from "react";
import { CaretDown } from "phosphor-react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import { handleScroll } from "../../util/smoothScroll";
import Logo from "../../assets/frPurple.svg";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { TbAppWindowFilled } from "react-icons/tb";
import { BiWindowClose } from "react-icons/bi";
import {
  AsideContainer,
  HeaderContainer,
  HeaderLeftSide,
  NavContainer,
} from "./style";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 839) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

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

        <NavContainer isOpen={menuOpen}>
          <div onClick={handleMenuClick}>
            {menuOpen ? (
              <BiWindowClose
                size={32}
                color="#996DFF"
                onClick={handleMenuClick}
              />
            ) : (
              <TbAppWindowFilled
                size={32}
                color="#996DFF"
                onClick={handleMenuClick}
              />
            )}
          </div>
          {menuOpen && (
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
          )}
        </NavContainer>
      </HeaderContainer>
    </>
  );
}
