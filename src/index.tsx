
import App from './App';
import { createRoot } from 'react-dom/client';

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.default.primaryColor};
    --secondary-color: ${({ theme }) => theme.default.secondaryColor};
    --background-color: ${({ theme }) => theme.default.backgroundColor};
    --text-color: ${({ theme }) => theme.default.textColor};

    --font-family: ${({ theme }) => theme.fontFamily};
    --font-size: ${({ theme }) => theme.fontSize};
    --line-height: ${({ theme }) => theme.lineHeight};
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

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App />);