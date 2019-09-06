import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";


class Nav extends Component {
  constructor() {
      super()
      this.logout = this.logout.bind(this)
      this.state = {
        redirect: false
    }
  }

  logout(event) {
      event.preventDefault()
      console.log('logging out')
      axios.post('/user/logout').then(response => {
        console.log(response.data)
        this.setState({ redirect: true })
      }).catch(error => {
          console.log('Logout error')
      })
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to="/SignIn" />
      }
    }  

  render() {
      
      return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
          <div className="d-flex justify-content-start">
            <Link className="navbar-brand" to="/AllInProgress">Ghost Writer</Link>
            <Link className="nav-item nav-link" to="/AllInProgress">In-progress stories</Link>
            <Link className="nav-item nav-link" to="/AllComplete">Complete stories</Link>
          </div>
  
          <div className="d-flex justify-content-end">
            <img className="profile-pic" src="https://www.w3schools.com/howto/img_avatar.png" alt="User profile picture" />
            <div className="dropdown show">
              <Link to="/Profile" className="btn btn-secondary dropdown-toggle profileDropdown" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                My profile
                </Link>
                {this.renderRedirect()}
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link to="/profile" className="dropdown-item">Profile</Link>
              <Link to="/" className="dropdown-item" onClick={this.logout}>Sign Out</Link>
              <Link to="/signUp" className="dropdown-item">Sign up</Link>
              <Link to="/signin" className="dropdown-item" >Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      );
  }
}

export default Nav



