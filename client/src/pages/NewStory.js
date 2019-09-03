import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";

class NewStory extends Component {
  state = {
    stories: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveStory({
        title: this.state.title,
        contributors: this.state.contributors,
        story_section: this.state.story_section
      })
        .then(res => this.loadStories())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Create a new story!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.contributors}
                onChange={this.handleInputChange}
                name="contributors"
                placeholder="Initial Contributor (required)"
              />
              <TextArea
                value={this.state.story_section}
                onChange={this.handleInputChange}
                name="story_section"
                placeholder="Story Addition (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Story
              </FormBtn>
            </form>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default NewStory;