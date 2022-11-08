import styled from "styled-components";

type Props = {
  wrap: "wrap" | "no-wrap";
};

export const Row = styled.div<Props>`
  display: flex;
  gap: 1rem;
  flex-wrap: ${(props) => props.wrap};
`;
