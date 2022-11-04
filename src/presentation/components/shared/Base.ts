import styled from "styled-components";
import { BaseBackground } from "./BaseBackground";

export const Base = styled(BaseBackground)`
  min-height: 100vh;
  transition: all ease-in-out 500ms;
  color: ${(props) => props.theme.inverted};
`;
