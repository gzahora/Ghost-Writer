import React, { Component } from "react";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import "./style.css";


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
            <Container>
                <Row>
                    <div className="d-flex justify-content-start col">
                        <h2>Your profile</h2>
                    </div>
                </Row>
                
                <img className="profile-pic-lg" src="https://www.w3schools.com/howto/img_avatar.png" alt="User pic" />
                <form class="form-inline" style={{ marginTop: "20px", marginBottom: "40px" }}>
                    <div class="form-group mb-2">
                        <label for="staticProfilePic" class="sr-only">Update profile picture</label>
                        <input type="text" readonly class="form-control-plaintext" id="staticProfilePic" value="Update profile picture" />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="profilePicForm" class="sr-only">Update</label>
                        <input type="text" class="form-control" id="profilePicForm" placeholder="Enter image URL" />
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Update</button>
                </form>

                <Row>
                    <h2 style={{ marginBottom: "20px" }}>Your contributions</h2>
                </Row>
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

export default Profile;
