import styled from "styled-components";

export const StyledDiv = styled("div")<{ direction: string }>`
  display: flex;
  flex-direction: ${(prop) => prop.direction};
  min-height: 100vh;
`;

export const StyledMain = styled("main")`
  width: 100vw;
  padding: 1vh 0.5vw;
  display: flex;
  flex-direction: row;
`;

export const Title = styled("h1")<{ size: string }>`
  width: inherit;
  font-family: "Staatliches";
  font-style: normal;
  font-weight: 400;
  font-size: ${(prop) => prop.size};
  line-height: 45px;
`;
