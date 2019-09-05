import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirect: false
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
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/user/signin', {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                // if (response.status === 200) {
                //     this.props.updateUser({
                //         loggedIn: true,
                //         username: response.data.username
                //     })
                // }

                this.setState({ redirect: true })
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <div>
                <h4>Sign on in!</h4>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                    </div>
                    <input className="form-input"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password: </label>
                    </div>

                    <input className="form-input"
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {this.renderRedirect()}
                    <div className="form-group ">
                        <button
                            className="btn btn-primary"
                            onClick={this.handleSubmit}
                            type="submit">Signin</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
