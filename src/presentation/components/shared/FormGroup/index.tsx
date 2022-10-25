import React, { Fragment } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { If } from "../If";

type Props = {
  input: React.ReactElement;
  error: boolean;
  errorMessage: string | null;
};

export function FormGroup({ error, input, errorMessage }: Props) {
  return (
    <Fragment>
      {input}
      <If
        condition={error}
        then={<ErrorMessage>{errorMessage}</ErrorMessage>}
      />
    </Fragment>
  );
}
