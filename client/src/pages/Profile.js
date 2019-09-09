import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import ProfileCard from "../components/ProfileCard";
import API from "../utils/API";
import { Row, Container } from "../components/Grid";
import "./style.css";
import Nav from "../../src/components/Nav";


class Profile extends Component {
    state = {
        story: [],
        user: {},

    };
    componentDidMount() {
        this.userInfo();
    };

    userInfo = () => {
        API.getUser()
            .then(res => { console.log("======="); this.setState({ user: res.data }); console.log(res.data); console.log(this.state.user); console.log("======="); this.loadStories(); })
            .catch(err => console.log(err));
    }

    tester() {
        console.log("testing user");
        console.log(this.state);
    };

    loadStories = () => {
        API.getStories()
            .then(res => { console.log("xxxxxxxx"); this.setState({ story: res.data }); console.log(this.state.story); console.log(this.state.user); console.log("xxxxx"); })
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
                    <Jumbotron>
                        <h1 className="landingHeader">Stories you created</h1>
                    </Jumbotron>
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
                                    .map(story => {
                                        console.log("Map story!");
                                        console.log(story.user._id);
                                        console.log("State User");
                                        console.log(this.state.user.user._id);
                                        return <ProfileCard
                                            key={story._id}
                                            link={"/inProgress/" + story._id}
                                            title={story.title}
                                            genre={story.genre}
                                            setting={story.setting}
                                            username={story.user.username}
                                        >
                                        </ProfileCard>
                                    })}
                        </Row>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                    <Jumbotron>
                        <h1 className="landingHeader">Sections you contributed too</h1>
                    </Jumbotron>
                    {this.state.story.length > 0 ? (
                        <Row>
                            {
                                console.log("CHECK HERE")
                            }
                            {
                                console.log(this.state.story)
                            }
                            {
                                this.state.story
                                    .filter(story => (story.plot_point))
                                    .map(story => {
                                        console.log("THIS STORY");
                                        console.log(story.plot_point.user._id)
                                        console.log(this.state.user.user._id)
                                        if (story.plot_point.user._id == this.state.user.user._id) {
                                            console.log("Map story!");
                                            console.log(story.user._id);
                                            console.log("plot_point");
                                            console.log(story.plot_point);
                                            return <ProfileCard
                                                key={story.plot_point._id}
                                                link={"/inProgress/" + story._id}
                                                title={story.title}
                                                genre={story.genre}
                                                setting={story.plot_point.section_text}
                                                username={story.plot_point.user.username}
                                                section="(Plot Point)"
                                            >
                                            </ProfileCard>
                                        }
                                    })}
                            {
                                this.state.story
                                    .filter(story => (story.midpoint))
                                    .map(story => {
                                        console.log("THIS STORY");
                                        console.log(story.midpoint.user._id)
                                        console.log(this.state.user.user._id)
                                        if (story.midpoint.user._id == this.state.user.user._id) {
                                            console.log("Map story!");
                                            console.log(story.user._id);
                                            console.log("midpoint");
                                            console.log(story.midpoint);
                                            return <ProfileCard
                                                key={story._id}
                                                link={"/inProgress/" + story._id}
                                                title={story.title}
                                                genre={story.genre}
                                                setting={story.midpoint.section_text}
                                                username={story.midpoint.user.username}
                                                section="(Midpoint)"
                                            >
                                            </ProfileCard>
                                        }
                                    })}
                            {
                                this.state.story
                                    .filter(story => (story.climax))
                                    .map(story => {
                                        console.log("THIS STORY");
                                        console.log(story.climax.user._id)
                                        console.log(this.state.user.user._id)
                                        if (story.climax.user._id == this.state.user.user._id) {
                                            console.log("Map story!");
                                            console.log(story.user._id);
                                            console.log("climax");
                                            console.log(story.climax);
                                            return <ProfileCard
                                                key={story._id}
                                                link={"/inProgress/" + story._id}
                                                title={story.title}
                                                setting={story.climax.section_text}
                                                username={story.climax.user.username}
                                                section="(Climax)"
                                            >
                                            </ProfileCard>
                                        }
                                    })}
                            {
                                this.state.story
                                    .filter(story => (story.resolution))
                                    .map(story => {
                                        console.log("THIS STORY");
                                        console.log(story.resolution.user._id)
                                        console.log(this.state.user.user._id)
                                        if (story.resolution.user._id == this.state.user.user._id) {
                                            console.log("Map story!");
                                            console.log(story.user._id);
                                            console.log("resolution");
                                            console.log(story.resolution);
                                            return <ProfileCard
                                                key={story._id}
                                                link={"/stories/" + story._id}
                                                title={story.title}
                                                setting={story.resolution.section_text}
                                                username={story.resolution.user.username}
                                                section="(Resolution)"
                                            >
                                            </ProfileCard>
                                        }
                                    })}
                        </Row>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                    <footer></footer>
                </Container>
            </div>

        );
    }
}

export default Profile;
