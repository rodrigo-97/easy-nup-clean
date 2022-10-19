import { Colors } from "@/presentation/themes/colors";
import styled from "styled-components";

type Props = {
    color: Colors
    fullWidth?: boolean
}

export const Button = styled.button<Props>`
    padding: .8rem;
    border-radius: 8px;
    transition: all ease-in-out 200ms;
    background-color: ${(props) => props.theme.colors[props.color]};
    width: ${(props) => props.fullWidth && '100%'};
    border: none;
    color: #FFF;
    display: flex;
    align-items: center;
    gap: .5rem;

    :hover {
        transform: translate(0, -.2rem);
        cursor: pointer;
    }
`