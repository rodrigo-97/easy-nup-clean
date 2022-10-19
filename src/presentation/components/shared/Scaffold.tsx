import { ArrowLeft } from "phosphor-react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { If } from "./If";

type Props = {
  title: string;
  showBackArrow?: boolean;
  body: React.ReactElement;
};

export function Scaffold({ title, showBackArrow = false, body }: Props) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div>
      <Header>
        <If
          condition={showBackArrow}
          then={
            <ArrowLeft
              size={25}
              weight="bold"
              onClick={handleGoBack}
              className="pointer"
            />
          }
        />
        <h2>{title}</h2>
      </Header>
      {body}
    </div>
  );
}
