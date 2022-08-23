import { CheckCircle } from "phosphor-react";
import { BsLinkedin, BsWhatsapp, BsXDiamondFill } from "react-icons/bs";
import { StyledDiv, StyledHeader, StyledSpanTitle } from "./styles";
import { Component, useEffect, useState } from "react";
import { IconType } from "react-icons/lib";
interface Props {
  contactKind?: string;
  title?: string;
}

export function SideObject({ contactKind, title }: Props) {
  const [contactHref, setContactHref] = useState("");
  const [contactComponent, setContactComponent] = useState(<></>);

  useEffect(() => {
    handleContacts({ contactKind, title });
  });

  function handleContacts({ contactKind, title }: Props): void {
    if (contactKind === "WhatsApp") {
      setContactHref(
        "https://api.whatsapp.com/send/?phone=5561982815820&text=Olá%2C+Hugo,+acabei+de+ver+seu+portifólio%2C+e+gostaria+de+conversar+com+você!"
      );
      setContactComponent(
        <StyledSpanTitle>
          <BsWhatsapp /> WhatsApp
        </StyledSpanTitle>
      );
    } else if (contactKind === "LinkedIn") {
      setContactHref("https://www.linkedin.com/in/hugosvasconcelos/");
      setContactComponent(
        <StyledSpanTitle>
          <BsLinkedin /> LinkedIn
        </StyledSpanTitle>
      );
    } else {
      setContactComponent(
        <StyledSpanTitle>
          <BsXDiamondFill />
          {title}
        </StyledSpanTitle>
      );
    }
  }
  return (
    <a href={contactHref} target="_blank">
      <StyledDiv>{contactComponent}</StyledDiv>
    </a>
  );
}
