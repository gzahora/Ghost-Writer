import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import InProgressCard from "../components/InProgressCard";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import "./style.css";
import Nav from "../../src/components/Nav";


class Profile extends Component {
    state = {
        story: {},
        user: {},

    };
    componentDidMount() {
        this.userInfo();
        // .then(res => this.setState({
        //   user: res.data.user
        // }, () =>
        // this.tester();
        
        
    };

    userInfo = () => {
        API.getUser()
            .then(res => {console.log("======="); this.setState({ user: res.data }); console.log(res.data); console.log(this.state.user); console.log("=======");this.loadStories();})
            .catch(err => console.log(err));
    }

    // userInfo () {
    //  return axios.get('/user/');
    // };

    tester() {
        console.log("testing user");
        console.log(this.state);
    };

    loadStories = () => {
        API.getStories()
            .then(res => {console.log("xxxxxxxx"); this.setState({ story: res.data }); console.log(this.state.story); console.log(this.state.user); console.log("xxxxx");})
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
            <Nav />
            <Container>
                <Row>
                    <div className="d-flex justify-content-start col">
                        <h2>Your profile</h2>
                    </div>
                </Row>
                <Jumbotron>Stories you seeded/created</Jumbotron>
                {this.state.story.length > 0 ? (
                    <Row>
                        {
                            console.log("THIS IS THE STORY STATE")
                        }
                        {
                            console.log(this.state.story)
                        }
                        {
                            this.state.story
                            .filter(story => (story.user._id == this.state.user.user._id))
                            // .filter(story => (
                            .map(story => {
                                console.log("Map story!");
                                console.log(story.user._id);
                                console.log("State User");
                                console.log(this.state.user.user._id);
                                return <InProgressCard
                                    key={story._id}
                                    link={"/inProgress/" + story._id}
                                    title={story.title}
                                    genre={story.genre}
                                    setting={story.setting}
                                    username={story.user.username}
                                >
                                </InProgressCard>
                        })}
                    </Row>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
                    <Jumbotron>Sections you contributed too</Jumbotron>
                    {/* {this.state.section.length > 0 ? (
                    <Row>
                        {
                            console.log("THIS IS THE SECTION STATE")
                        }
                        {
                            console.log(this.state.section)
                        }
                        {
                            this.state.section
                            .filter(section => (section.user._id == this.state.user.user._id))
                            // .filter(story => (
                            .map(story => {
                                console.log("Map story!");
                                console.log(story.user._id);
                                console.log("State User");
                                console.log(this.state.user.user._id);
                                return <InProgressCard
                                    key={story._id}
                                    link={"/inProgress/" + story._id}
                                    title={story.title}
                                    genre={story.genre}
                                    setting={story.setting}
                                    username={story.user.username}
                                >
                                </InProgressCard>
                        })}
                    </Row>
                ) : (
                        <h3>No Results to Display</h3>
                    )} */}
                <footer></footer>
            </Container>
            </div>
            
        );
    }
}

export default Profile;
