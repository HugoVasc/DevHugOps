import { CheckCircle } from "phosphor-react";
import {
  StyledDiv,
  StyledHeader,
  StyledSpanSchedule,
  StyledSpanStatus,
  StyledSpanTitle,
  StyledTitle,
} from "./styles";

interface Props {
  name: string;
}

export function SideProject({ name }: Props) {
  return (
    <a href="">
      <StyledSpanSchedule>Terça • 22 de junho • 19h00</StyledSpanSchedule>
      <StyledDiv>
        <StyledHeader>
          <StyledSpanTitle>
            <CheckCircle size={20} />
            {name}
          </StyledSpanTitle>
          <StyledSpanStatus>Ao Vivo</StyledSpanStatus>
        </StyledHeader>
        <StyledTitle>Abertura do evento Ignite labs</StyledTitle>
      </StyledDiv>
    </a>
  );
}
