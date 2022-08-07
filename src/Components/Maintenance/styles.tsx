import styled, { css } from "styled-components";

export const Container = styled("div")<{ width?: number; height?: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  max-width: ${(prop) => prop.width}vw;
  height: ${(prop) => prop.height}vh;
`;

export const Button = styled("button")<{ primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #102774;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(prop) =>
    prop.primary &&
    css`
      background: #102774;
      color: white;
    `}
`;
