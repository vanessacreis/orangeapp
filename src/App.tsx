import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyle } from "./style/globalStyle";
import { light } from "./style/theme";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ?? light} />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
