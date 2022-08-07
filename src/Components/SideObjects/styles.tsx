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

export const StyledSpanTitle = styled("span")`
  font-size: 1rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem /* 8px */;
`;

export const StyledSpanStatus = styled("span")`
  font-size: 0.75rem /* 12px */;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  line-height: 1rem /* 16px */;
  font-weight: 700;
  border-radius: 0.25rem /* 4px */;
  border: 1px solid rgb(134 239 172);
  padding-left: 0.5rem /* 8px */;
  padding-right: 0.5rem /* 8px */;
  padding-top: 0.125rem /* 2px */;
  padding-bottom: 0.125rem /* 2px */;
`;

export const StyledTitle = styled("strong")`
  margin-top: 1.25rem /* 20px */;
  display: block;
  color: #acacac;
`;

export const StyledDiv = styled("div")`
  border-radius: 0.25rem /* 4px */;
  border: 1px solid;
  border-color: rgb(16 39 116 / var(--tw-border-opacity));
  padding: 1rem; /* 16px */
  margin-top: 0.5rem; /* 8px */
  background-color: rgb(16 39 116 / var(--tw-text-opacity));
`;

export const StyledHeader = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
