import { BsCardHeading, BsEyeFill, BsGithub } from "react-icons/bs";
import { Description, IconsDiv, StyledDiv, Title } from "./styles";

export const ProjectObject = () => {
  return (
    <StyledDiv>
      <Title size="20px">Sorteador de Amigo secreto</Title>
      <hr />
      <Description>
        Projeto elaborado durante o curso React: testando seus componentes. A
        aplicação tem a função de receber uma lista de nomes e sortea-los entre
        si de forma que uma pessoa não sorteie a si mesma, e nem pessoas se
        sorteiem entre si. A mesma foi desenvolvida com o intuito de desenvolver
        meu conhecimento e habilidades na criação de testes unitários e de
        integração utilizando a framework Jest
      </Description>
      <hr />
      <IconsDiv>
        <a
          href="https://github.com/HugoVasc/sorteador-de-amigo-secreto"
          target={"_blank"}
        >
          <BsGithub size={35} />
        </a>
        <a
          href="https://sorteador-de-amigo-secreto-b8kb6d5e8-hugovasc.vercel.app/"
          target={"_blank"}
        >
          <BsEyeFill size={35} />
        </a>

        <BsCardHeading size={35} />
      </IconsDiv>
    </StyledDiv>
  );
};
