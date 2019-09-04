import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import NewStoryBtn from "../components/NewStory";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import "./style.css";


class Stories extends Component {
  state = {
    stories: []
  };

  componentDidMount() {
    this.loadStories();
  }

  loadStories = () => {
    API.getStories()
      .then(res => this.setState({ stories: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="d-flex justify-content-start col-6">
            <h2>Select a story</h2>

          </div>
          <div className="d-flex justify-content-end col-6">
            <Link style={{ alignSelf: 'flex-end' }} to="/newStory" className="btn btn-primary">Create new story</Link>
          </div>
        </Row>
        <br />
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
      </Container>
    );
  }
}

export default Stories;
