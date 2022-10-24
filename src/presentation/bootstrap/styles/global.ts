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

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 99999999999s 0s, color 99999999999s 0s;
  }
`;
