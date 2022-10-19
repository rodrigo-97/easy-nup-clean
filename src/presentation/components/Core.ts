import styled from "styled-components";

export const Core = styled.div`
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.inverted};
    padding: 16px;
    width: 100%;
    min-height: calc(92vh - 64px);
    transition: all ease-in-out 500ms;
`