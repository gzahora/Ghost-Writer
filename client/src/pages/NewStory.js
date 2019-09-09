import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import MenuItem from "../components/MenuItem";
import API from "../utils/API";
import { Redirect } from 'react-router-dom'
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";
import Nav from "../../src/components/Nav";

class NewStory extends Component {
  state = {
    story: {},
    title: "",
    genre: "Adventure",
    setting: "",
    user: {},
    redirect: false
  };

  componentDidMount() {
    this.userInfo();
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleChange = (event) => {
    this.setState({ genre: event.target.value })
    console.log(event.target.value);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log({
      user: this.state.user._id,
      title: this.state.title,
      genre: this.state.genre,
      setting: this.state.setting
    });

    API.saveStory({
      user: this.state.user._id,
      title: this.state.title,
      genre: this.state.genre,
      setting: this.state.setting
    })
      .then(this.setState({ redirect: true }))
      // .then(console.log(this.state))
      .catch(err => console.log(err));
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/AllInProgress" />
    }
  }

  render() {
    return (
      <div>
      <Nav />
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="landingHeader">Create a new story!</h1>
            </Jumbotron>
              <MenuItem style={{paddingLeft: "15px"}} className="genreSelect" value={this.state.genre} onChange={this.handleChange} />
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                style={{paddingTop: "15px"}}
                value={this.state.setting}
                onChange={this.handleInputChange}
                name="setting"
                placeholder="Start your story with the setting"
              />
              {this.renderRedirect()}
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Story
              </FormBtn>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default NewStory;
