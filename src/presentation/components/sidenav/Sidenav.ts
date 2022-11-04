import styled from "styled-components";

export const Sidenav = styled.aside`
  width: 300px;
  padding: 0 16px 32px;
  min-height: calc(95vh - 64px);
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.inverted};
  transition: all ease-in-out 500ms;
`;
