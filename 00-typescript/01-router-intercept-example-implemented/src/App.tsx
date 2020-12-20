import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, ListPage, DetailPage } from "./pages";
import { AuthProvider, AuthRouteComponent } from "./core";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <AuthRouteComponent path="/list">
            <ListPage />
          </AuthRouteComponent>
          <AuthRouteComponent path="/detail">
            <DetailPage />
          </AuthRouteComponent>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
