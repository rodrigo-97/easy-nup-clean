import { Colors } from "@/presentation/themes/colors";
import styled from "styled-components";

type Props = {
  color: Colors;
};

const ContractTile = styled.div<Props>`
  background-color: ${({ theme }) => theme.secondary};
  padding: 8px 8px 16px;
  border-radius: 4px;
  width: 100%;
  border-left: 4px solid ${({ color, theme }) => theme.colors[color]};
`;

export default ContractTile;
