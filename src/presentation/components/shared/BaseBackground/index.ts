import styled from "styled-components";

export const BaseBackground = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  transition: all ease-in-out 500ms;
`;
