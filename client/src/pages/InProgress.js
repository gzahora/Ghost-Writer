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
          this.setState({ active: false})
          // this.setState({ redirectCompletedStory: true })
          console.log("Resolution doesn't exist");
        }
      })
      .catch(err => console.log(err));
    // console.log(this.state.story.title);
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
                <br></br>
                <h6>you wrote {this.state.wordsNumber} words so far</h6>
              </Jumbotron>
              <form>
                {/* <Input 
              value={this.state.section_name}
              onChange={this.handleInputChange}
              name="section_name"  
              placeholder="setting, plot_point, midpoint, climax, or resolution (required)" 
              /> */}
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
          </Row>
          <footer></footer>
        </Container>
      </div>
    );
  }
}

export default InProgress;