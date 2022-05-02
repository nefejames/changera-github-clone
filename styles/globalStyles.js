import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    color: var(--grey-primary);
    background:#fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :root{
    /* colors */
    --grey-primary: #24292f; //c9d1d9
    --grey-secondary: #8b949e;

    --link-hover-color: #0969da;

    --btn-bg-color: #f6f8fa;
    --btn-text-color: #24292f;
    --btn-hover-bg-color: #f3f4f6;
    --btn-border-color: rgba(27, 31, 36, 0.15);
    --btn-shadow: 0 1px 0 rgba(27, 31, 36, 0.04);
    --btn-inset-shadow: 0 1px 0 rgba(225, 225, 225, 0.25);


    /* font sizes */
    --font-sm: 1.2rem;
    --font-md: 1.3rem;
    --font-lg: 1.4rem;
    --font-xl: 1.6rem;
    --font-2xl: 2rem;
    --font-3xl: 2.4rem;
  }
`;

export default GlobalStyles;
