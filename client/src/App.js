import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Story from "./pages/Story";
import NewStory from "./pages/NewStory";
import InProgress from "./pages/InProgress";
import Complete from "./pages/Complete";
import AllInProgress from "./pages/AllInProgress";
import AllComplete from "./pages/AllComplete";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ActiveAdventure from "./pages/activeGenre/ActiveAdventure";
import ActiveMystery from "./pages/activeGenre/ActiveMystery";
import ActiveHorror from "./pages/activeGenre/ActiveHorror";
import ActiveScifi from "./pages/activeGenre/ActiveScifi";
import ActiveComedy from "./pages/activeGenre/ActiveComedy";
import ActiveRomance from "./pages/activeGenre/ActiveRomance";
import ActiveAction from "./pages/activeGenre/ActiveAction";
import CompleteAdventure from "./pages/completeGenre/CompleteAdventure";
import CompleteMystery from "./pages/completeGenre/CompleteMystery";
import CompleteHorror from "./pages/completeGenre/CompleteHorror";
import CompleteScifi from "./pages/completeGenre/CompleteScifi";
import CompleteComedy from "./pages/completeGenre/CompleteComedy";
import CompleteRomance from "./pages/completeGenre/CompleteRomance";
import CompleteAction from "./pages/completeGenre/CompleteAction";
import axios from "axios"
import LoginModal from "./components/Modal";



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      id: null,
      role: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log(response.data)
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          id: response.data.user._id,
          role: response.data.user.role
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {


    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/stories" component={Story} />
            <Route exact path="/stories/:id" component={Complete} />
            <Route exact path="/newStory" component={NewStory} />
            <Route exact path="/inProgress/:id" component={InProgress} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/modal" component={LoginModal} />
            <Route exact path="/AllinProgress" component={AllInProgress} />
            <Route exact path="/AllComplete" component={AllComplete} />
            <Route exact path="/ActiveAdventure" component={ActiveAdventure} />
            <Route exact path="/ActiveMystery" component={ActiveMystery} />
            <Route exact path="/ActiveHorror" component={ActiveHorror} />
            <Route exact path="/ActiveScifi" component={ActiveScifi} />
            <Route exact path="/ActiveComedy" component={ActiveComedy} />
            <Route exact path="/ActiveRomance" component={ActiveRomance} />
            <Route exact path="/ActiveAction" component={ActiveAction} />
            <Route exact path="/CompleteAdventure" component={CompleteAdventure} />
            <Route exact path="/CompleteMystery" component={CompleteMystery} />
            <Route exact path="/CompleteHorror" component={CompleteHorror} />
            <Route exact path="/CompleteScifi" component={CompleteScifi} />
            <Route exact path="/CompleteComedy" component={CompleteComedy} />
            <Route exact path="/CompleteRomance" component={CompleteRomance} />
            <Route exact path="/CompleteAction" component={CompleteAction} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
