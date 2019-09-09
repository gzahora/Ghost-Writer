import React, { Component } from "react";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import "./style.css";
import Nav from "../../src/components/Nav";


class Profile extends Component {
    //   state = {
    //     story: []
    //   };

    //   componentDidMount() {
    //     this.loadStories();
    //   }

    //   loadStories = () => {
    //     API.getStories()
    //       .then(res => this.setState({ story: res.data }))
    //       .catch(err => console.log(err));
    //   };

    render() {
        return (
            <div>
                <Nav />
                <Container>          
                    <Row>
                        <h2 style={{ marginBottom: "20px" }}>Your contributions</h2>
                    </Row>
                    <Row>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Row>
                    <footer></footer>
                </Container>
            </div>
        );
    }
}

export default Profile;
