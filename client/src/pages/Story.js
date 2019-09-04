import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Story extends Component {
  state = {
    story: []
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
      <Container fluid>
        <Row>
        <Link to="/newStory" className="btn btn-primary">Add New Story!</Link>
        </Row>
        <Row>
          <Col size="md-6 sm-6">
            <Jumbotron>
              <h1>Active Stories</h1>
            </Jumbotron>
            {this.state.story.length ? (
              <List>
                {this.state.story
                .filter(story => (story.active))
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
          <Col size="md-6 sm-6">
            <Jumbotron>
              <h1>Completed Stories</h1>
            </Jumbotron>
            {this.state.story.length ? (
              <List>
                {this.state.story
                .filter(story => (story.active !== true))
                .map(story => (
                  <ListItem key={story._id}>
                    <a href={"/stories/" + story._id}>
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

export default Story;
