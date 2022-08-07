import { CheckCircle } from "phosphor-react";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import {
  StyledDiv,
  StyledHeader,
  StyledSpanStatus,
  StyledSpanTitle,
  StyledTitle,
} from "./styles";
import { useEffect, useState } from "react";
interface Props {
  contactKind: string;
}

export function SideProject({ contactKind }: Props) {
  const [contactHref, setContactHref] = useState("");
  const [contactComponent, setContactComponent] = useState(<></>);

  useEffect(() => {
    handleContacts(contactKind);
  });

  function handleContacts(kind: string): void {
    if (kind === "WhatsApp") {
      setContactHref(
        "https://api.whatsapp.com/send/?phone=5561982815820&text=Olá%2C+Hugo,+acabei+de+ver+seu+portifólio%2C+e+gostaria+de+conversar+com+você!"
      );
      setContactComponent(
        <StyledSpanTitle>
          <BsWhatsapp /> WhatsApp
        </StyledSpanTitle>
      );
    } else if (kind === "LinkedIn") {
      setContactHref("https://www.linkedin.com/in/hugosvasconcelos/");
      setContactComponent(
        <StyledSpanTitle>
          <BsLinkedin /> LinkedIn
        </StyledSpanTitle>
      );
    } else {
      setContactComponent(<p>Elemento nao renderizado</p>);
    }
  }
  return (
    <a href={contactHref} target="_blank">
      <StyledDiv>
        <StyledHeader>{contactComponent}</StyledHeader>
      </StyledDiv>
    </a>
  );
}
