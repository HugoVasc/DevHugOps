import styled from "styled-components";
import { keyframes } from "styled-components";

const SlideIn = keyframes`
	0% {
		transform: translateX(100%);
	}

	100% {
		transform: translateX(0px);
	}
`;

const SlideOut = keyframes`
	0% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
`;

export const StyledDiv = styled.div<{ Opened?: boolean }>`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: 150px;
  animation-name: ${(props) => (props.Opened ? SlideIn : SlideOut)};
  /* animation-name: ${SlideOut}; */
  animation-duration: 0.6s;
  animation-iteration-count: 1;
  transition: all 300ms ease-in-out;
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
