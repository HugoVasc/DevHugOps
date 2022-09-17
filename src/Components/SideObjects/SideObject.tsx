import { BsLinkedin, BsWhatsapp, BsXDiamondFill } from "react-icons/bs";
import { StyledDiv, StyledHeader, StyledSpanTitle } from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Props {
  contactKind?: string;
  title?: string;
  link?: string;
}

export function SideObject({ contactKind, title, link }: Props) {
  const [blankPage, setBlankPage] = useState(true);
  const [contactHref, setContactHref] = useState("");
  const [contactComponent, setContactComponent] = useState(<></>);

  useEffect(() => {
    handleContacts({ contactKind, title });
  });

  function handleContacts({ contactKind, title }: Props): void {
    if (contactKind === "WhatsApp") {
      setBlankPage(true);
      setContactHref(
        "https://api.whatsapp.com/send/?phone=5561982815820&text=Olá%2C+Hugo,+acabei+de+ver+seu+portifólio%2C+e+gostaria+de+conversar+com+você!"
      );
      setContactComponent(
        <StyledSpanTitle>
          <BsWhatsapp /> WhatsApp
        </StyledSpanTitle>
      );
    } else if (contactKind === "LinkedIn") {
      setBlankPage(true);
      setContactHref("https://www.linkedin.com/in/hugosvasconcelos/");
      setContactComponent(
        <StyledSpanTitle>
          <BsLinkedin /> LinkedIn
        </StyledSpanTitle>
      );
    } else {
      setBlankPage(false);
      setContactHref(`/${link}`);
      setContactComponent(
        <StyledSpanTitle>
          <BsXDiamondFill />
          {title}
        </StyledSpanTitle>
      );
    }
  }
  return (
    <>
      {blankPage ? (
        <a href={contactHref} target="_blank">
          <StyledDiv>{contactComponent}</StyledDiv>
        </a>
      ) : (
        <Link to={contactHref}>
          <StyledDiv>{contactComponent}</StyledDiv>
        </Link>
      )}
    </>
  );
}
