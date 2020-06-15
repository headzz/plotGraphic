import styled from "styled-components";
import { checkAlign } from "./function";

export const FlexStyled = styled.div`
  display: flex;
  ${(props) => checkAlign(props)};
  flex-direction: row;
  width: 100%;
`;
