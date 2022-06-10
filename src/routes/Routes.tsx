import { useState } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header/Header";
import YourHome from "../pages/YourHome/YourHome";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { GlobalStyle } from "../style/globalStyle";
import PrivateRoute from "./PrivateRoute";
import { ProviderAppointments } from "../hooks/useAppointments";
import SignUp from "../pages/SignUp/SignUp";
import Footer from "../components/Footer/Footer";

function Routes() {
  return (
    <BrowserRouter>
      <ProviderAppointments>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/yourhome/:id"
            element={
              <PrivateRoute>
                <YourHome />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<Error />} />
        </Switch>
        <Footer />
      </ProviderAppointments>
    </BrowserRouter>
  );
}

export default Routes;
