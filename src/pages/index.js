import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Me from "./Me";
import Projects from "./Projects";
import Education from "./Education";

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/wesley-cv-react-gitconnected">
          <Redirect to="/me" />
        </Route>
        <Route path="/me">
          <Me user={user} />
        </Route>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
