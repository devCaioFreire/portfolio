import { RxLinkedinLogo } from "react-icons/rx";
import { HiMail } from "react-icons/hi";

import { BoxContainer, ContactContainer, ContactTextContent } from "./style";

export function Contact() {
  return (
    <ContactContainer>
      <header>
        <h1>
          <span>#</span>contato
        </h1>
      </header>

      <div>
        <ContactTextContent>
          <p>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </ContactTextContent>

        <BoxContainer>
          <h3>Entre em contato por aqui!</h3>
          <a href="https://www.linkedin.com/in/caiofreire/">
            <RxLinkedinLogo size={24} /> Caio Freire
          </a>
          <a href="mailto:caiohenriquefreire@icloud.com">
            <HiMail size={24} /> caiohenriquefreire@icloud.com
          </a>
        </BoxContainer>
      </div>
    </ContactContainer>
  );
}
