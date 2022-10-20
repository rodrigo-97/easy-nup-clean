import styled from "styled-components";

enum Sizes {
  xxs = "1rem",
  xs = "1.2rem",
  md = "1.4rem",
  lg = "2rem",
  xl = "2.5rem",
  xxl = "3rem",
}

type Props = {
  size: "xxs" | "xs" | "md" | "lg" | "xl" | "xxl";
};

export const Spacing = styled.div<Props>`
  margin: ${(props) => Sizes[props.size]};
`;
