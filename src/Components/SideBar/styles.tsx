import styled from "styled-components";

export const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: 150px;
`;

export const StyledObject = styled("div")`
  border-radius: 0.25rem /* 4px */;
  border: 1px solid;
  border-color: rgb(16 39 116 / var(--tw-border-opacity));
  padding: 1rem; /* 16px */
  margin-top: 0.5rem; /* 8px */
  background-color: rgb(35 52 88 / var(--tw-text-opacity));

  font-size: 1rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem /* 8px */;
`;
