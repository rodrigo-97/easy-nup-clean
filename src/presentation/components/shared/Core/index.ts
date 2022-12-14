import styled from "styled-components";

export const Core = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.inverted};
  padding: 16px;
  width: 100%;
  min-height: calc(95vh - 64px);
  transition: all ease-in-out 500ms;
`;
