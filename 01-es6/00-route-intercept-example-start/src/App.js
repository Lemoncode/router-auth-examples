import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, ListPage, DetailPage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/list">
          <ListPage />
        </Route>
        <Route path="/detail">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
