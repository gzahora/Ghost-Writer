import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";

class InProgress extends Component {
  state = {
    stories: {}
  };
  // When this component mounts, grab the story with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getStoryProgress(this.props.match.params.id)
      .then(res => this.setState({ stories: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Stories</Link>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add to this story</h1>
            </Jumbotron>
            <form>
              <Input name="contributors" placeholder="Contributor (required)" />
              <TextArea name="story_section" placeholder="Your Addition to the Story (required)" />
              <FormBtn>Submit Your Contribution</FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
            <h1>{this.state.stories.title} by {this.state.stories.contributors}</h1>
            </Jumbotron>
            <article>
              <p>
                {this.state.stories.story_section}
              </p>
            </article>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default InProgress;