import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Story from "./pages/Story";
import NewStory from "./pages/NewStory";
import InProgress from "./pages/InProgress";
import Complete from "./pages/Complete";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Story} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/story/:id" component={Complete} />
          <Route exact path="/newStory" component={NewStory} />
          <Route exact path="/inProgress/:id" component={InProgress} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
