import styled from "styled-components";

export const StyledHeader = styled.header`
  width: full;
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
  border-bottom-width: 1px;
  border-radius: 0 0 15px 15px;
`;

export const StyledTitle = styled.h1`
  font-family: "Staatliches";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
`;

export const Button = styled("button")<{ primary?: boolean }>`
  background: transparent;
  position: absolute;
  right: 1vh;
  border-radius: 3px;
  border: 2px solid #fff;
  color: white;
  margin: 0.25em 1em;
  padding: 0.25em 0.5em;
`;
