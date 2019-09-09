import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SettingModal from "../components/InfoModal/setting";
import FirstPlotPointModal from "../components/InfoModal/FirstPlotPoint";
import MidpointModal from "../components/InfoModal/Midpoint";
import ClimaxModal from "../components/InfoModal/Climax";
import ResolutionModal from "../components/InfoModal/Resolution";
import API from "../utils/API";
import { Redirect } from 'react-router-dom'
import { TextArea, FormBtn } from "../components/Form";
import axios from "axios";
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
        <Container fluid className="text-center">
          <SettingModal />
          <FirstPlotPointModal />
          <MidpointModal />
          <ClimaxModal />
          <ResolutionModal />
          <Row>
            <Container>
            <Col size="md-12">
            <Jumbotron>
                <h1 className="storyTitle">"{this.state.story.title}"</h1>
                <h2>Genre: {this.state.story.genre}</h2>
              </Jumbotron>
              <article>
              <div className="align-middle">
                <button className="infoBtn" data-toggle="modal" data-target="#settingModal"><i className="fa fa-info"></i></button>
                &nbsp;&nbsp;&nbsp;
                <h3>Setting -  {this.state.story.user ? this.state.story.user.username : " "}</h3>
                <p>
                  {this.state.story.setting}
                </p>
                </div>
                <div className="align-middle">
                <button className="infoBtn" data-toggle="modal" data-target="#plotPointModal"><i className="fa fa-info"></i></button>
                &nbsp;&nbsp;&nbsp;
                <h3>Plot Point -  {this.state.story.plot_point ? this.state.story.plot_point.user.username : " "}</h3>
                <p>
                {this.state.story.plot_point ? this.state.story.plot_point.section_text : "Section has not yet been created"}
                </p>
                </div>
                <div className="align-middle">
                <button className="infoBtn" data-toggle="modal" data-target="#midpointModal"><i className="fa fa-info"></i></button>
                &nbsp;&nbsp;&nbsp;
                <h3>Midpoint -  {this.state.story.midpoint ? this.state.story.midpoint.user.username : " "}</h3>
                <p>
                {this.state.story.midpoint ? this.state.story.midpoint.section_text : "Section has not yet been created"}
                </p>
                </div>
                <div className="align-middle">
                <button className="infoBtn" data-toggle="modal" data-target="#climaxModal"><i className="fa fa-info"></i></button>
                &nbsp;&nbsp;&nbsp;
                <h3>Climax -  {this.state.story.climax ? this.state.story.climax.user.username : " "}</h3>
                <p>
                {this.state.story.climax ? this.state.story.climax.section_text : "Section has not yet been created"}
                </p>
                </div>
                <div className="align-middle">
                <button className="infoBtn" data-toggle="modal" data-target="#resolutionModal"><i className="fa fa-info"></i></button>
                &nbsp;&nbsp;&nbsp;
                <h3>Resolution -  {this.state.story.resolution ? this.state.story.resolution.user.username : " "}</h3>
                <p>
                {this.state.story.resolution ? this.state.story.resolution.section_text : "Section has not yet been created"}
                </p>
                </div>
              </article>
            </Col>
            </Container>
          </Row>
          <footer></footer>
        </Container>
      </div>
    );
  }
}

export default Complete;
