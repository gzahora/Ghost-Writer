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
                <h1 className="storyTitle">"{this.state.story.title}"</h1>
                <h2>Genre: {this.state.story.genre}</h2>
              </Jumbotron>
              <article>
                <h3>Setting: </h3>
                <h5>by {this.state.story.user ? this.state.story.user.username : " "}</h5>
                <button class="infoBtn" data-toggle="modal" data-target="#settingModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.setting}
                </p>
                <h3>Plot Point: </h3>
                <h5>by {this.state.story.plot_point ? this.state.story.plot_point.user.username : " "}</h5>
                <button class="infoBtn" data-toggle="modal" data-target="#plotPointModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.plot_point ? this.state.story.plot_point.section_text : "Section has not yet been created"}
                </p>
                <h3>Midpoint: </h3>
                <h5>by {this.state.story.midpoint ? this.state.story.midpoint.user.username : " "}</h5>
                <button class="infoBtn" data-toggle="modal" data-target="#midpointModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.midpoint ? this.state.story.midpoint.section_text : "Section has not yet been created"}
                </p>
                <h3>Climax: </h3>
                <h5>by {this.state.story.climax ? this.state.story.climax.user.username : " "}</h5>
                <button class="infoBtn" data-toggle="modal" data-target="#climaxModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.climax ? this.state.story.climax.section_text : "Section has not yet been created"}
                </p>
                <h3>Resolution: </h3>
                <h5>by {this.state.story.resolution ? this.state.story.plot_point.user.username : " "}</h5>
                <button class="infoBtn" data-toggle="modal" data-target="#resolutionModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.resolution ? this.state.story.resolution.section_text : "Section has not yet been created"}
                </p>
              </article>
            </Col>
          </Row>
          <footer></footer>
        </Container>
      </div>
    );
  }
}

export default Complete;
