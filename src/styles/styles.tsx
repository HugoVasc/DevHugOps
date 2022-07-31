import styled from "styled-components";

export const Title = styled("h1")<{ size: string }>`
  font-family: "Staatliches";
  font-style: normal;
  font-weight: 400;
  font-size: ${(prop) => prop.size};
  line-height: 45px;
`;
