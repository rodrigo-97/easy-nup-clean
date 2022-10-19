import { FontSizes } from "@/presentation/constants/fontSized";
import styled from "styled-components";

export const DashboardTile = styled.div`
    background-color: ${(props) => props.theme.colors.success};
    height: 3vh;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    color: #fff;
    font-size: ${FontSizes.lg};
`