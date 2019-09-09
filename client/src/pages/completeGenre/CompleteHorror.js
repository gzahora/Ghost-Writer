import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import InProgressCard from "../../components/InProgressCard";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import Nav from "../../../src/components/Nav";
import "../style.css";


class CompleteHorror extends Component {
  state = {
    story: [],
    user: {}

  };
  componentDidMount() {
    this.userInfo();
    this.loadStories();
  };

  userInfo = () => {
    API.getUser()
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  loadStories = () => {
    API.getStories()
      .then(res => this.setState({ story: res.data }, () => console.log(this.state.story)))
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
                  <Link className="dropdown-item" to="/CompleteAction">Action</Link>
                  <Link className="dropdown-item" to="/CompleteAdventure">Adventure</Link>
                  <Link className="dropdown-item" to="/CompleteComedy">Comedy</Link>
                  <Link className="dropdown-item" to="/CompleteHorror">Horror</Link>
                  <Link className="dropdown-item" to="/CompleteMystery">Mystery</Link>
                  <Link className="dropdown-item" to="/CompleteRomance">Romance</Link>
                  <Link className="dropdown-item" to="/CompleteScifi">Sci-fi</Link>
                  <Link className="dropdown-item" to="/AllComplete">All Genres</Link>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Link style={{ alignSelf: "flex-end", position: "relative", bottom: "4px", margin: "auto", height: "40px" }} to="/newStory" className="btn btn-primary">Create new story</Link>
            </div>
          </Row>
          <br />
          <Jumbotron>
            <h1>Stories In-Progress</h1>
          </Jumbotron>
          {this.state.story.length > 0 ? (
            <Row>
              {this.state.story
                .filter(story => (story.active !== true))
                .filter(story => (story.genre === "Horror"))
                .map(story => (
                  <InProgressCard
                    key={story._id}
                    link={"/inProgress/" + story._id}
                    title={story.title}
                    genre={story.genre}
                    setting={story.setting}
                    username={story.user.username}
                  >
                  </InProgressCard>
                ))}
            </Row>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Container>
      </div>
    );
  }
}

export default CompleteHorror;
