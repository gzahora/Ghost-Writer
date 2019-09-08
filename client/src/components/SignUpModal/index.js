import React, { Component } from 'react'
import axios from 'axios'



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

            <div className="modal fade" id="signUpModal" tabindex="-1" role="dialog"  aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">

                
                <div className="SignupForm modal-content">
                    <div className="modal-header">
                        <h5 className="signUpModal" id="signUpModalTitle">Create an Account:</h5>
                    </div>
                    <form className="form-horizontal">
                        <div className="form-group modal-body">

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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                            <button
                                className="btn btn-info"
                                onClick={this.handleSubmit}
                                type="submit"
                                data-dismiss="modal"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }

}

export default SignUp














