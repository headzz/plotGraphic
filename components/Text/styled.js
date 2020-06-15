import styled from "styled-components";

export const TextStyled = styled.p`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-family: Lato, Helvetica, sans-serif;
  font-size: ${(props) => (props.large ? "1.5rem" : "1rem")};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
`;
