import { Suspense, lazy, useEffect, useState } from "react";
import logo from "./assets/images/App/logo.svg";
import styled, { ThemeProvider } from "styled-components";
import { Logo } from "./App/lib/components/atoms/Logo";
import theme from "./App/themes/weShould";
import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NotFound } from "./App/lib/components/views/pages/NotFound";
import { Menu } from "./lib/components/molecules/Menu";
import { GlobalStyle } from "./App/themes/root";

const Home = lazy(() => import("./App/lib/components/views/pages/Home"));
const DemoPageStayStuck = lazy(() => import("./App/lib/components/views/pages/demos/StayStuck"));

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  padding-top: var(--padding-large);
`;

function App() {
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
    <Router>
      <ThemeProvider theme={store}>
          <GlobalStyle />
          <StyledApp>
            <Logo src={logo} className="App-logo" alt="logo" />
            <StyledHeader>
              <Menu items={[
                { children: "Home", to: "/" },
                { children: "Stay Stuck", to: "/display/stay-stuck" } 
              ]}/>
            </StyledHeader>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="display/stay-stuck" element={<DemoPageStayStuck />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;


