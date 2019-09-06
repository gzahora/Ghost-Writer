import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import InProgressCard from "../components/InProgressCard";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import Card from "../components/Card";
import "./style.css";


class AllInProgress extends Component {
  state = {
    story: {}
  };

  componentDidMount() {
    this.loadStories();
  }

  loadStories = () => {
    API.getStories()
      .then(res => this.setState({ story: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="d-flex justify-content-start col">
            <h2>Select a story</h2>
            <div className="dropdown show">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All genres
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" onChange={this.handleChange}>
                <a className="dropdown-item">
                  <Link to="/ActiveAdventure">Adventure</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveMystery">Mystery</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveHorror">Horror</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveScifi">Sci-fi</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveComedy">Comedy</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveRomance">Romance</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveAction">Action</Link>
                </a>
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
          {this.state.story.length ? (
            <Row>
              {this.state.story
                .filter(story => (story.active))
                .map(story => (
                  <InProgressCard
                    key={story._id}
                    link={"/inProgress/" + story._id}
                    title={story.title}
                    genre={story.genre}
                    setting={story.setting}>
                  </InProgressCard>
                ))}
            </Row>
          ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
    );
  }
}

export default AllInProgress;
