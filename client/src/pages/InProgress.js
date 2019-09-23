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


class InProgress extends Component {
  state = {
    story: [],
    section_name: "",
    section_text: "",
    next_section: "",
    user: {},
    active: true,
    wordsNumber: 0
  };

  countWords = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
       if (str.charAt(i) == " ") {
            count ++;
        }
    }
    this.state.wordsNumber = count +1;
    }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.countWords(value);

};

  componentDidMount() {
    this.userInfo();

  };

  updateStory = (event) => {
    event.preventDefault();
    console.log(this.state.next_section, this.state.section_text)
    API.updateStory({
      // user: req.user._id,
      user: this.state.user._id,
      section_name: this.state.next_section,
      section_text: this.state.section_text,
      story_id: this.state.story._id
    })
      .then(res => { window.location.reload() })
      .then(this.redirectSetState())
      .catch(err => console.log(err));
  };

  userInfo = () => {
    axios.get('/user/').then(response => {
      console.log(response.data)
      if (response.data.user) {
        this.setState({
          user: response.data.user
        })
      }
      API.getStoryProgress(this.props.match.params.id)
      .then(res => {
        this.setState({ story: res.data });
        console.log("testing states below");
        console.log(this.state);
        console.log(this.state.story.user.username);
        if(!this.state.story.plot_point) {
          this.setState({ next_section: "plot_point" });
          console.log("Plot Point doesn't exist");

        } else if (!this.state.story.midpoint) {
          this.setState({ next_section: "midpoint" });
          console.log("Mid Point doesn't exist");

        } else if (!this.state.story.climax) {
          this.setState({ next_section: "climax" });
          console.log("Climax doesn't exist");

        } else if (!this.state.story.resolution) {
          this.setState({ next_section: "resolution"})
          this.setState({ active: false})
          console.log("Resolution doesn't exist");
        }
      })
      .catch(err => console.log(err));
    })
  }

  redirectSetState = () => {
    if (this.state.story.climax) {
      this.setState({ redirectCompletedStory: true })
    } else (this.setState({ redirectCompletedSection: true }))
  }

  renderRedirect = () => {
    if (this.state.redirectCompletedSection) {
      return <Redirect to="/AllInProgress" />
    } else if (this.state.redirectCompletedStory) {
      return <Redirect to="/AllComplete" />
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <SettingModal />
          <FirstPlotPointModal />
          <MidpointModal />
          <ClimaxModal />
          <ResolutionModal />
          <Row>
            <Col size="md-2">
              <Link to="/AllInProgress">← Back to Stories</Link>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1 className="instructionText">Add to this story</h1>
                <h3>You are writing the {this.state.next_section} now</h3>
                <h6>you wrote {this.state.wordsNumber} words so far</h6>
              </Jumbotron>
              <form>
                <TextArea
                style={{paddingTop:"15px"}}
                  value={this.state.section_title}
                  onChange={this.handleInputChange}
                  name="section_text"
                  placeholder="Your Addition to the Story (required)"
                />
                {this.renderRedirect()}
                <FormBtn onClick={this.updateStory}>Submit Your Contribution</FormBtn>
              </form>
            </Col>
            <Col size="md-6">
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

export default InProgress;