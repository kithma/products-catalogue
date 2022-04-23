import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import Process from "./components/process/Process";
import FlexContainer from "./components/shared/FlexContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FlexContainer justifyContent="center">
        <Process />
      </FlexContainer>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
