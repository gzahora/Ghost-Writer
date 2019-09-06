import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import Card from "../components/Card";
import "./style.css";


class ActiveComedy extends Component {
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
        <Row>
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Stories In-Progress</h1>
            </Jumbotron>
            {this.state.story.length ? (
              <List>
                {this.state.story
                .filter(story => (story.genre === "Sci-fi"))
                .map(story => (
                  <ListItem key={story._id}>
                    <a href={"/inProgress/" + story._id}>
                    <strong>
                        Title: "{story.title}"
                        <br></br>
                        Genre: "{story.genre}"
                        <br></br>
                        Contributors: {story.user}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ActiveComedy;
