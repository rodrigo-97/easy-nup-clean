import { Colors } from "@/presentation/themes/colors";
import styled from "styled-components";

type Props = {
  color: Colors;
  fullWidth?: boolean;
};

export const Button = styled.button<Props>`
  padding: 0.8rem;
  border-radius: 8px;
  transition: all ease-in-out 200ms;
  background-color: ${(props) => props.theme.colors[props.color]};
  width: ${(props) => props.fullWidth && "100%"};
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  display: flex;
  justify-content: center;

  :hover {
    transform: translate(0, -0.2rem);
    cursor: pointer;
  }
`;
