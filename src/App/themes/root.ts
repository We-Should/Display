import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.default.primaryColor};
    --secondary-color: ${({ theme }) => theme.default.secondaryColor};
    --background-color: ${({ theme }) => theme.default.backgroundColor};
    --background-alt-color: ${({ theme }) => theme.alt.backgroundColor};
    --text-color: ${({ theme }) => theme.default.textColor};

    --link-color: ${({ theme }) => theme.default.linkColor};
    --link-color-active: ${({ theme }) => theme.default.linkColorActive};

    --font-family: ${({ theme }) => theme.fontFamily};
    --font-weight: ${({ theme }) => theme.fontWeight};
    --font-family-bold: ${({ theme }) => theme.fontFamily};
    --font-weight-bold: ${({ theme }) => theme.fontWeightBold};
    --font-size: ${({ theme }) => theme.fontSize};
    --line-height: ${({ theme }) => theme.lineHeight};

    --padding-small: ${({ theme }) => theme.paddingSmall};
    --padding-medium: ${({ theme }) => theme.paddingMedium};
    --padding-large: ${({ theme }) => theme.paddingLarge};

    --menu-border-color: ${({ theme }) => theme.menu.borderColor};
    --menu-link-color: ${({ theme }) => theme.menu.linkColor};
  }
  

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: var(--line-height);
    font-size: var(--font-size);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;