import { ContractsWrapper } from "../components/contracts/ContractsWrapper";
import { ContractTile } from "../components/contracts";
import { Scaffold } from "../components/shared/Scaffold";

export function Contracts() {
  return (
    <Scaffold
      title="Contratos"
      showBackArrow
      body={
        <ContractsWrapper>
          <ContractTile
            finishDate={new Date()}
            initialDate={new Date()}
            status="asasas"
            title="Teste"
          />
          <ContractTile
            finishDate={new Date()}
            initialDate={new Date()}
            status="asasas"
            title="Teste"
          />
        </ContractsWrapper>
      }
    />
  );
}
