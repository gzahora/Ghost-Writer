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
          <div className="d-flex justify-content-start col">
            <h2>Select a story</h2>
            <div class="dropdown show">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All genres
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" onChange={this.handleChange}>
                <a class="dropdown-item" href="#">Adventure</a>
                <a class="dropdown-item" href="#">Mystery</a>
                <a class="dropdown-item" href="#">Horror</a>
                <a class="dropdown-item" href="#">Sci-fi</a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Link style={{ alignSelf: "flex-end", position: "relative", bottom: "4px", margin: "auto", height: "40px" }} to="/newStory" className="btn btn-primary">Create new story</Link>
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
