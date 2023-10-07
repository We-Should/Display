import { useEffect, useRef, useState } from "react";
import {StayStuck} from "./lib/helpers/StayStuck";
import logo from "./assets/images/App/logo.svg";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from ".";
import { Code } from "./lib/components/atoms/Code";
import { Logo } from "./App/lib/components/atoms/Logo";
import { Container } from "./lib/components/atoms/Container";
import theme from "./App/themes/weShould";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

function App() {
  const ref = useRef<HTMLDivElement | null>(null);

  const [store, setTheme] = useState(theme.dark);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)')) {
      setTheme(theme.dark);
    } else {
      setTheme(theme.light);
    }

    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
      if (event.matches) {
        setTheme(theme.dark);
      } else {
        setTheme(theme.light);
      }
    });
   
  }, []);
  
  return (
    <ThemeProvider theme={store}>
      <Container>
        <GlobalStyle />
        <StyledApp>
          <Logo src={logo} className="App-logo" alt="logo" />
          <header className="App-header">
            <p>
              Edit <Code>src/App.tsx</Code> and save to reload.
            </p>
            <div ref={ref}>
              Lorum ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor, nisl ut aliquet sagittis, nisl nisl aliquet nisl,
              nisl nisl aliquet nisl.

              <StayStuck parent={ref}>
                <div style={{height: "100px", width: "100px", backgroundColor: "blue"}}>
                  You keep it here.
                </div>
              </StayStuck>
            </div>
          </header>
        </StyledApp>
      </Container>
    </ThemeProvider>
  );
}

export default App;
