import styled from "styled-components";

export const SidenavTile = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 4px;
    gap: 1rem;
    background-color: ${(props) => props.theme.primary};
    transition: all ease-in-out 500ms;

    :hover {
        transition: all ease-in-out 100ms;
        cursor: pointer;
        background-color: ${(props) => props.theme.secondary};
    }
`