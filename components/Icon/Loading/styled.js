import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadAnimation = styled.div`
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
