import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Button = styled("button")<{ primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(prop) =>
    prop.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
