import styled from "styled-components";

export const Navbar = styled.nav`
  height: 5vh;
  padding: 16px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.inverted};
  transition: all ease-in-out 500ms;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
