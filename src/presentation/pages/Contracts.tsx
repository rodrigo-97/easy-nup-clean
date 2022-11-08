import { Scaffold } from "../components/shared/Scaffold";

export function Contracts() {
  return (
    <Scaffold
      title="Contratos"
      showBackArrow
      body={
        <div
          style={{ display: "flex", flex: 1, gap: "1rem", flexWrap: "wrap" }}
        ></div>
      }
    />
  );
}
