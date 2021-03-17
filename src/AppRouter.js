import React from "react";
import { Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Contact from "./modules/Contact";
import ContactDetail from "./modules/ContactDetail";

const AppRouter = (props) => (
  <Router history={props.history}>
    <Switch>
      <Route exact path="/" component={Contact} />
      <Route exact path="/contact-detail" component={ContactDetail} />
    </Switch>
  </Router>
);

export default AppRouter;
