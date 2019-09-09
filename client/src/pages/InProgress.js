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
    user: {}
    // redirectCompletedStory: false,
    // redirectCompletedSection: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // getNextSection = () => {
  //   console.log("THIS IS GET NEXT SECTION");
  //   API.findNextSection(this.props.match.params.id)
  //   .then(res => {
  //     this.setState({ next_section: res.data.section }, () => console.log(this.state.next_section));
  //   })
  //   .catch(err => console.log(err));
  // }

  // When this component mounts, grab the story with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.userInfo();
    // this.getNextSection();
    // console.log("this.props.match.params.id");
    // console.log(this.props.match.params.id);
    API.getStoryProgress(this.props.match.params.id)
      .then(res => {
        this.setState({ story: res.data });
        console.log("testing states below");
        console.log(this.state);
        console.log(this.state.story.user.username);
        if(!this.state.story.plot_point) {
          this.setState({ next_section: "plot_point" });
          // this.setState({ redirectCompletedSection: true })
          console.log("Plot Point doesn't exist");

        } else if (!this.state.story.midpoint) {
          this.setState({ next_section: "midpoint" });
          // this.setState({ redirectCompletedSection: true })
          console.log("Mid Point doesn't exist");

        } else if (!this.state.story.climax) {
          this.setState({ next_section: "climax" });
          // this.setState({ redirectCompletedSection: true })
          console.log("Climax doesn't exist");

        } else if (!this.state.story.resolution) {
          this.setState({ next_section: "resolution"})
          // this.setState({ redirectCompletedStory: true })
          console.log("Resolution doesn't exist");
        }
      })
      .catch(err => console.log(err));
    // console.log(this.state.story.title);
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
                <h1>Add to this story</h1>
                <h3>You are writing the {this.state.next_section} now</h3>
              </Jumbotron>
              <form>
                {/* <Input 
              value={this.state.section_name}
              onChange={this.handleInputChange}
              name="section_name"  
              placeholder="setting, plot_point, midpoint, climax, or resolution (required)" 
              /> */}
                <TextArea
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
                <h1>"{this.state.story.title}"</h1>
                <h2>Genre: {this.state.story.genre}</h2>
              </Jumbotron>
              <article>
                <h3>Setting: </h3>
                <button class="infoBtn" data-toggle="modal" data-target="#settingModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.setting}
                </p>
                <h3>Plot Point: </h3>
                <button class="infoBtn" data-toggle="modal" data-target="#plotPointModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.plot_point ? this.state.story.plot_point.section_text : "No sections available!"}
                </p>
                <p>
                {this.state.story.plot_point ? this.state.story.plot_point.user.username : "No sections available!"}
                </p>
                <h3>Midpoint: </h3>
                <button class="infoBtn" data-toggle="modal" data-target="#midpointModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.midpoint ? this.state.story.midpoint.section_text : "No sections available!"}
                </p>
                <h3>Climax: </h3>
                <button class="infoBtn" data-toggle="modal" data-target="#climaxModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.climax ? this.state.story.climax.section_text : "No sections available!"}
                </p>
                <h3>Resolution: </h3>
                <button class="infoBtn" data-toggle="modal" data-target="#resolutionModal"><i class="fa fa-info"></i></button>
                <p>
                  {this.state.story.resolution ? this.state.story.resolution.section_text : "No sections available!"}
                </p>
              </article>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default InProgress;