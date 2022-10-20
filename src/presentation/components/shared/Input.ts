import styled from "styled-components";

type Props = {
  hasErrors?: boolean;
  fullWidth?: boolean;
};

export const Input = styled.input<Props>`
  padding: 0.5rem 0.8rem;
  width: ${(props) => props.fullWidth && "100%"};
  height: 2rem;
  border-radius: 8px;
  outline: none;
  border-width: ${(props) => (props.hasErrors ? "2px" : 0)};
  border-color: ${(props) => props.theme.colors.danger};
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.inverted};
  transition: all ease-in-out 500ms;
`;
