import { Link } from "../shared/Link";
import { Row } from "../shared/Row";
import Tile from "./Tile";
import { format } from "date-fns";

type Props = {
  title: string;
  initialDate: Date;
  finishDate: Date;
  status: string;
};

export function ContractTile({
  finishDate,
  initialDate,
  title,
  status,
}: Props) {
  const formatDate = (date: Date) => format(date, "dd/MM/yyyy");

  return (
    <Tile color="success">
      <h3>{title}</h3>
      <p>
        <>
          De {formatDate(initialDate)} até {formatDate(finishDate)}
        </>
      </p>
      <p>{status}</p>
      <Row>
        <Link>Visualizar</Link>
        <Link>Solicitar alteração</Link>
        <Link>Solicitar exclusão</Link>
      </Row>
    </Tile>
  );
}
