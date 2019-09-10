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
        count++;
      }
    }
    this.state.wordsNumber = count + 1;
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
          if (!this.state.story.plot_point) {
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
            this.setState({ next_section: "resolution" })
            this.setState({ active: false })
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
        <Container>
          <SettingModal />
          <FirstPlotPointModal />
          <MidpointModal />
          <ClimaxModal />
          <ResolutionModal />
          <Row>
            <Col size="12">
              <Link to="/AllInProgress"><button type="button" class="btn btn-primary backToStoryBtn"><i class="fa fa-arrow-left"></i> Back to Stories</button></Link>
            </Col>
            <Col size="xl-6 lg-6 md-12 sm-12">
              <Jumbotron>
                <h2 className="storyTitle">Add to this story</h2>
                <h3 className="storyTitle">You are writing the {this.state.next_section} now</h3>
              </Jumbotron>
              <form>
                {/* <Input 
              value={this.state.section_name}
              onChange={this.handleInputChange}
              name="section_name"  
              placeholder="setting, plot_point, midpoint, climax, or resolution (required)" 
              /> */}
                <TextArea
                  style={{ paddingTop: "15px" }}
                  value={this.state.section_title}
                  onChange={this.handleInputChange}
                  name="section_text"
                  placeholder="Your Addition to the Story (required)"
                />
                <p className="wordCountText">{this.state.wordsNumber} words written</p>

                {this.renderRedirect()}
                <FormBtn onClick={this.updateStory}>Submit Your Contribution</FormBtn>
              </form>
            </Col>


            <Col size="xl-6 lg-6 md-12 sm-12">
              <Jumbotron>
                <h2 className="storyTitle">"{this.state.story.title}"</h2>
                <h3 className="storyTitle">Genre: {this.state.story.genre}</h3>
              </Jumbotron>
              <article>
                <button className="infoBtn" data-toggle="modal" data-target="#settingModal"><i class="fa fa-info"></i></button>
                <h3 className="storyHeaders">Setting</h3>
                <p className="authorTitles">by {this.state.story.user ? this.state.story.user.username : " "}</p>
                <p>
                  {this.state.story.setting}
                </p>
                <button className="infoBtn" data-toggle="modal" data-target="#plotPointModal"><i className="fa fa-info"></i></button>
                <h3 className="storyHeaders">Plot Point</h3>
                <p className="authorTitles">by {this.state.story.plot_point ? this.state.story.plot_point.user.username : " "}</p>
                <p>
                  {this.state.story.plot_point ? this.state.story.plot_point.section_text : "Section has not yet been created"}
                </p>
                <button className="infoBtn" data-toggle="modal" data-target="#midpointModal"><i className="fa fa-info"></i></button>
                <h3 className="storyHeaders">Midpoint</h3>
                <p className="authorTitles">by {this.state.story.midpoint ? this.state.story.midpoint.user.username : " "}</p>
                <p>
                  {this.state.story.midpoint ? this.state.story.midpoint.section_text : "Section has not yet been created"}
                </p>
                <button className="infoBtn" data-toggle="modal" data-target="#climaxModal"><i className="fa fa-info"></i></button>
                <h3 className="storyHeaders">Climax</h3>
                <p className="authorTitles">by {this.state.story.climax ? this.state.story.climax.user.username : " "}</p>
                <p>
                  {this.state.story.climax ? this.state.story.climax.section_text : "Section has not yet been created"}
                </p>
                <button className="infoBtn" data-toggle="modal" data-target="#resolutionModal"><i className="fa fa-info"></i></button>
                <h3 className="storyHeaders">Resolution</h3>
                <p className="authorTitles">by {this.state.story.resolution ? this.state.story.plot_point.user.username : " "}</p>
                <p>
                  {this.state.story.resolution ? this.state.story.resolution.section_text : "Section has not yet been created"}
                </p>
              </article>
            </Col>

          </Row>
          <footer></footer>
        </Container>
      </div >
    );
  }
}

export default InProgress;