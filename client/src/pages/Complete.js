import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Nav from "../../src/components/Nav";

class Complete extends Component {
  state = {
    story: {}
  };

  componentDidMount() {
    API.getStory(this.props.match.params.id)
      .then(res => {
        this.setState({ story: res.data });
        console.log("testing states below");
        console.log(this.state);
        console.log(this.state.story);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>{this.state.story.title} by {this.state.story.user}</h1>
              </Jumbotron>
              <article>
                <h3>Setting: </h3>
                <p>
                  {this.state.story.setting}
                </p>
                <h3>Plot Point: </h3>
                <p>
                  {this.state.story.plot_point ? this.state.story.plot_point.section_text : "No sections available!"}
                </p>
                <h3>Midpoint: </h3>
                <p>
                  {this.state.story.midpoint ? this.state.story.midpoint.section_text : "No sections available!"}
                </p>
                <h3>Climax: </h3>
                <p>
                  {this.state.story.climax ? this.state.story.climax.section_text : "No sections available!"}
                </p>
                <h3>Resolution: </h3>
                <p>
                  {this.state.story.resolution ? this.state.story.resolution.section_text : "No sections available!"}
                </p>
              </article>
            </Col>
          </Row>
          <Row>
            <Col size="md-2">
              <Link to="/AllComplete">← Back to Stories</Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Complete;
