import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.inverted};
  background-color: ${(props) => props.theme.secondary};
`;
