import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  td, th {
    padding: .5rem 1rem;
    text-align: start;
  }

  .row {
    display: flex;
    gap: 1rem;
  }
`;
