import {
  Param,
  ParamContent,
  ParamControls,
} from "../components/contracts/Param";
import { Link } from "../components/shared/Link";
import { Row } from "../components/shared/Row";
import { Scaffold } from "../components/shared/Scaffold";

export function Contracts() {
  return (
    <Scaffold
      title="Contratos"
      body={
        <div
          style={{ display: "flex", flex: 1, gap: "1rem", flexWrap: "wrap" }}
        >
          {Array(50)
            .fill(1)
            .map((e, i) => {
              return (
                <Param key={i}>
                  <ParamContent>
                    <p>Nome</p>
                    <p>Fi %</p>
                  </ParamContent>
                  <ParamContent>
                    <span>PARAMETROOOOOOOOOOOOOOOOOOOOOOOOOOOOO</span>
                    <span>90</span>
                  </ParamContent>
                  <ParamControls>
                    <Row wrap="no-wrap">
                      <Link>Editar</Link>
                      <Link>Remover</Link>
                    </Row>
                  </ParamControls>
                </Param>
              );
            })}
        </div>
      }
    />
  );
}
