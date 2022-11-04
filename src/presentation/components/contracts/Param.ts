import styled from "styled-components";
import { BaseBackground } from "../shared/BaseBackground";

export const Param = styled(BaseBackground)`
  width: fit-content;
  border-radius: 8px;
  padding: 16px;
  width: 15rem;

  p {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const ParamContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  p {
    font-weight: bold;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ParamControls = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;
