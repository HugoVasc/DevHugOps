import styled from "styled-components";

export const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 5px solid #435c85;
  margin-top: 3vh;
  margin-right: 2vw;
  padding: 1vh 0.5vw;
  width: 375px;
  min-height: 250px;
  height: fit-content;
  background: #233458;
`;

export const Description = styled("span")`
  padding: 10px 0px;
`;

export const IconsDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
`;

export const Title = styled("h1")<{ size: string }>`
  width: inherit;
  font-family: "Staatliches";
  font-style: normal;
  font-weight: 400;
  font-size: ${(prop) => prop.size};
  line-height: 45px;
`;
