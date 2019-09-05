import React, { Component } from 'react'
import axios from 'axios'
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import "./style.css";


class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log(this.state.username)
		event.preventDefault()

		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({
						redirectTo: '/stories'
					})
				} else {
				}
			}).catch(error => {
				console.log(error)
			})
	}

	render() {
		return (
			<Container>
				<Row>
					<h1>Ghost Writer</h1>
				</Row>
				<br />
				<Row>
					<h4>Create an account</h4>
				</Row>
				<br />
				<div class="container center_div">
					<div className="SignupForm">
						<form className="form-horizontal">
							<div className="form-group">

								<label className="form-label" htmlFor="username">Username</label>
								<input className="form-input"
									type="text"
									id="username"
									name="username"
									placeholder="Create a username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-group">
								<label className="form-label" htmlFor="password">Password</label>
								<input className="form-input"
									placeholder="Create a password"
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</div>
							<button
								className="btn btn-primary registerButton"
								onClick={this.handleSubmit}
								type="submit"
							>Sign up</button>
						</form>
					</div>
				</div>
				<p className="registerText">Already have an account? <Link style={{ marginTop: "40px", textAlign: "center", textDecoration: "underline", color: "#326699" }} to="/signIn">Sign in</Link></p>

			</Container>
		)
	}

}

export default SignUp
