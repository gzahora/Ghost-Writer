import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import "./style.css";
import axios from 'axios'


class Story extends Component {
  state = {
    story: {},
    user: {}
    
  };
  componentDidMount() {
    this.userInfo()
    .then(response => this.setState({
      user: response.data.user
    }, () =>
    this.tester()) )
    this.loadStories();
  };

  userInfo () {
   return axios.get('/user/');
  };

  tester () {
    console.log(this.state.user);
  };

  loadStories = () => {
    API.getStories()
      .then(res => this.setState({ story: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="d-flex justify-content-start col">
            <h2>Select a story</h2>
            <div className="dropdown show">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All genres
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" onChange={this.handleChange}>
              <a className="dropdown-item">
                  <Link to="/ActiveAdventure">Adventure</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveMystery">Mystery</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveHorror">Horror</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveScifi">Sci-fi</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveComedy">Comedy</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveRomance">Romance</Link>
                </a>
                <a className="dropdown-item">
                  <Link to="/ActiveAction">Action</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Link style={{ alignSelf: "flex-end", position: "relative", bottom: "4px", margin: "auto", height: "40px" }} to="/newStory" className="btn btn-primary">Create new story</Link>
          </div>
        </Row>
        <br />
        <Row>
          <Card 
          title={this.state.story.title} 
          genre={this.state.story.genre}
          />
          <Card />
          <Card />
          <Card />
        </Row>
      </Container>
    );
  }
}

export default Story;
