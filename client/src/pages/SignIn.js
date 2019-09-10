import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Row, Container } from "../components/Grid";
import SignUp from "../components/SignUpModal"
import "./style.css";


class SignIn extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
            redirect: false,
            modalShow: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    modalClose = () => this.setState({ modalShow: false });

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        axios.post('/user/signin', {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log('login response: ')
            console.log(response)
            this.setState({ redirect: true })
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            alert("Invalid username or password. Please try again.");
            console.log(this.state)
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/AllInProgress" />
        }
    }

    render() {
        return (
            <Container>
                <SignUp />
                <Row>
                    <h1 style={{ marginTop: "80px" }}>Ghost Writer</h1>
                </Row>
                <br />
                <Row>
                    <h4>Create and collaborate on stories!</h4>
                </Row>
                <br />
                <div className="container center_div">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input className="form-input"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>

                            <input className="form-input"
                                placeholder="Enter your password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group ">
                            {this.renderRedirect()}
                            <div className="text-center">

                                <button
                                    className="btn btn-primary registerBtn"
                                    onClick={this.handleSubmit}
                                    type="submit">Sign in</button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center">
                        <button type="button" className="btn btn-info registerBtn" data-toggle="modal" data-target="#signUpModal">
                            Don't have an account?
                        </button>
                    </div>
                </div>
            </Container>
        )
    }
}

export default SignIn
