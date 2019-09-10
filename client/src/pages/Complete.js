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
        <Container>
          <Row>
            <Col size="12">
              <Jumbotron>
                <h2 className="storyTitle">"{this.state.story.title}"</h2>
                <h2 className="storyTitle">Genre: {this.state.story.genre}</h2>
              </Jumbotron>
              <article>
                <button className="infoBtn" data-toggle="modal" data-target="#settingModal"><i className="fa fa-info"></i></button>
                <h3 className="storyHeaders">Setting</h3>
                <p className="authorTitles">by {this.state.story.user ? this.state.story.user.username : " "}</p>
                <p>
                  {this.state.story.setting}
                </p>
                <button className="infoBtn" data-toggle="modal" data-target="#plotPointModal"><i className="fa fa-info"></i></button>
                <h3 className="storyHeaders">Plot Point: </h3>
                <p className="authorTitles">by {this.state.story.plot_point ? this.state.story.plot_point.user.username : " "}</p>
                <p>
                  {this.state.story.plot_point ? this.state.story.plot_point.section_text : "Section has not yet been created"}
                </p>
                <button className="infoBtn" data-toggle="modal" data-target="#midpointModal"><i className="fa fa-info"></i></button>
                <h3 className="storyHeaders">Midpoint: </h3>
                <p className="authorTitles">by {this.state.story.midpoint ? this.state.story.midpoint.user.username : " "}</p>
                <p>
                  {this.state.story.midpoint ? this.state.story.midpoint.section_text : "Section has not yet been created"}
                </p>
                <button className="infoBtn" data-toggle="modal" data-target="#climaxModal"><i className="fa fa-info"></i></button>
                <h3 className="storyHeaders">Climax: </h3>
                <p className="authorTitles">by {this.state.story.climax ? this.state.story.climax.user.username : " "}</p>
                <p>
                  {this.state.story.climax ? this.state.story.climax.section_text : "Section has not yet been created"}
                </p>
                <button className="infoBtn" data-toggle="modal" data-target="#resolutionModal"><i className="fa fa-info"></i></button>
                <h3 className="storyHeaders">Resolution: </h3>
                <p className="authorTitles">by {this.state.story.resolution ? this.state.story.plot_point.user.username : " "}</p>
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
