import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";


class Nav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
    this.state = {
      redirect: false,
      user: {}
    }
  }

  componentDidMount() {
    this.userInfo()
      .then(response => this.setState({
        user: response.data.user
      }, () =>
        this.tester()));
  };

  tester() {
    console.log(this.state.user);
  };

  userInfo() {
    return axios.get('/user/');
  };

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
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-info collapse navbar-collapse"> */ }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <Link className="navbar-brand" to="/AllInProgress">Ghost Writer</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-item nav-link" to="/AllInProgress">In-progress stories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link" to="/AllComplete">Complete stories</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link className="nav-profile" to="/Profile">{this.state.user.username}</Link>
            <img className="profile-pic" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/pencil-512.png" alt="User pic" />
            <div className="dropdown show">
              <Link to="/Profile" className="btn btn-secondary dropdown-toggle profileDropdown" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                My profile
                 </Link>
              {this.renderRedirect()}
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <Link to="/" className="dropdown-item" onClick={this.logout}>Sign Out</Link>
              </div>
            </div>
          </form>
        </div>
      </nav>
      // <nav className="navbar bg-info navbar-left navbar-expand-sm">
      //   <div className="container-fluid">
      //     <div className="navbar-header">
      //       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      //         <span className="sr-only">Toggle navigation</span>
      //         <i className="fa fa-bars"></i>
      //       </button>
      //       <Link className="navbar-brand" to="/AllInProgress">Ghost Writer</Link>
      //     </div>
      //     <div id="navbar" className="collapse navbar-collapse">
      //       <ul className="nav navbar-nav">
      //         <Link className="nav-item nav-link" to="/AllInProgress">In-progress stories</Link>
      //         <Link className="nav-item nav-link" to="/AllComplete">Complete stories</Link>
      //       </ul>

      //       <ul className="nav navbar-nav navbar-right">
      //         {/* <div className="d-flex justify-content-end"> */}
      //         <Link className="nav-profile" to="/Profile">{this.state.user.username}</Link>
      //         <img className="profile-pic" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/pencil-512.png" alt="User pic" />
      //         <div className="dropdown show">
      //           <Link to="/Profile" className="btn btn-secondary dropdown-toggle profileDropdown" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //             My profile
      //           </Link>
      //           {this.renderRedirect()}
      //           <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      //             <Link to="/profile" className="dropdown-item">Profile</Link>
      //             <Link to="/" className="dropdown-item" onClick={this.logout}>Sign Out</Link>
      //           </div>
      //         </div>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

export default Nav
