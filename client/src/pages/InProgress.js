import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";


class InProgress extends Component {
  state = {
    story: {}
  };
  // When this component mounts, grab the story with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getStoryProgress(this.props.match.params.id)
      .then(res => {
        this.setState({ story: res.data })
        console.log(this.state.story);
      })
      .catch(err => console.log(err));

      // console.log(this.state.story.title);
  };

  updateStory() {
    API.updateStory({
      // user: req.user._id,
      section_name: "setting (placeholder)",
      section_test: "Write text here (placeholder)",
      story_id: this.props.match.params.id
    })
      .then(res => this.setState({ story: res.data }))
      .catch(err => console.log(err));
  };

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
              <Input name="section_name" placeholder="Setting, plotpoint, midpoint, climax, or resolution (required)" />
              <TextArea name="section_text" placeholder="Your Addition to the Story (required)" />
              <FormBtn onClick={this.updateStory}>Submit Your Contribution</FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
            <h1>{this.state.story.title} by {this.state.story.user}</h1>
            </Jumbotron>
            <article>
              <p>
                {this.state.story.story_section}
              </p>
            </article>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default InProgress;