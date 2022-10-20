import styled from "styled-components";

export const Base = styled.div`
  background-color: ${(props) => props.theme.primary};
  min-height: 100vh;
  transition: all ease-in-out 500ms;
  color: ${(props) => props.theme.inverted};
`;
