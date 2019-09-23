import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import InProgressCard from "../components/InProgressCard";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import "./style.css";
import Nav from "../../src/components/Nav";


class AllInProgress extends Component {
  state = {
    story: [],
    user: {},
    completed: "20%"
  };
  componentDidMount() {
    this.userInfo();
    this.loadStories();
  };

  // checkProgress = () => {
  //   {this.state.story
  //     .map(story => {
  //       if (story.climax) {
  //         this.setState({ completed: "80%" });
  //         console.log("WE HAVE CLIMAX");
  //       } else if (story.midpoint) {
  //         this.setState({ completed: "60%" });
  //         console.log("WE HAVE MIDPOINT");
  //       } else if (story.plot_point) {
  //         this.setState({ completed: "40%" });
  //         console.log("WE HAVE PLOT_POINT");
  //       } else {
  //         this.setState({ completed: "19%" });
  //       }
  //     })}
  //   }

  userInfo = () => {
    API.getUser()
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  loadStories = () => {
    API.getStories()
      .then(res => this.setState({ story: res.data }, () => console.log(this.state.story)))
      // .then
      // .then(this.checkProgress())
      .catch(err => console.log(err));
  };

  
    
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            <div className="d-flex justify-content-start col">
              <h2>Select a story</h2>
              <div className="dropdown show">
                <div className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  All genres
              </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" onChange={this.handleChange}>
                  <Link className="dropdown-item" to="/ActiveAction">Action</Link>
                  <Link className="dropdown-item" to="/ActiveAdventure">Adventure</Link>
                  <Link className="dropdown-item" to="/ActiveComedy">Comedy</Link>
                  <Link className="dropdown-item" to="/ActiveHorror">Horror</Link>
                  <Link className="dropdown-item" to="/ActiveMystery">Mystery</Link>
                  <Link className="dropdown-item" to="/ActiveRomance">Romance</Link>
                  <Link className="dropdown-item" to="/ActiveScifi">Sci-fi</Link>
                  <Link className="dropdown-item" to="/AllInProgress">All Genres</Link>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Link style={{ alignSelf: "flex-end", position: "relative", bottom: "4px", margin: "auto", height: "40px" }} to="/newStory" className="btn btn-primary">Create new story</Link>
            </div>
          </Row>
          <br />
          <Jumbotron>
            <h1 className="landingHeader">Stories In-Progress</h1>
          </Jumbotron>
          {this.state.story.length > 0 ? (
            <Row>
              {this.state.story
                .filter(story => (story.active))
                .map(story => {
                  if (story.climax) {
                    progress={this.state.completed}
                    console.log("WE HAVE CLIMAX");
                  } else if (story.midpoint) {
                    ({ completed: "60%" });
                    console.log("WE HAVE MIDPOINT");
                  } else if (story.plot_point) {
                    ({ completed: "40%" });
                    console.log("WE HAVE PLOT_POINT");
                  } else {
                    ({ completed: "19%" });
                  } 
                  return <InProgressCard
                    key={story._id}
                    link={"/inProgress/" + story._id}
                    title={story.title}
                    genre={story.genre}
                    setting={story.setting}
                    username={story.user.username}
                    progress={this.state.completed}
                  >
                  </InProgressCard>
                })}
            </Row>
          ) : (
              <h3>No Results to Display</h3>
            )}
        <footer></footer>
        </Container>
      </div>
    );
  }
}

export default AllInProgress;