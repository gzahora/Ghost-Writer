import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import NewStoryBtn from "../components/NewStory";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Stories extends Component {
  state = {
    stories: []
  };

  componentDidMount() {
    this.loadStories();
  }

  loadStories = () => {
    API.getStories()
      .then(res => this.setState({ stories: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <NewStoryBtn>
        {/* the newStory button won't work for some reason */}
        <Link to={"/newStory"}></Link>
          Add New Story!
        </NewStoryBtn>
        </Row>
        <Row>
          <Col size="md-6 sm-6">
            <Jumbotron>
              <h1>Active Stories</h1>
            </Jumbotron>
            {this.state.stories.length ? (
              <List>
                {this.state.stories
                .filter(stories => (stories.active))
                .map(stories => (
                  <ListItem key={stories._id}>
                    <a href={"/inProgress/" + stories._id}>
                      <strong>
                        "{stories.title}"
                        <br></br>
                        Contributors: {stories.contributors}
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
            {this.state.stories.length ? (
              <List>
                {this.state.stories
                .filter(stories => (stories.active != true))
                .map(stories => (
                  <ListItem key={stories._id}>
                    <a href={"/stories/" + stories._id}>
                      <strong>
                        "{stories.title}"
                        <br></br>
                        Contributors: {stories.contributors}
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

export default Stories;
