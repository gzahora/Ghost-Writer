import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stories from "./pages/Stories";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Stories} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/stories/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
