import React, { Component } from "react";
import "./style.css";

class LoginModal extends Component {
    render() {
        return (
            <div show={this.props.show} onHide={this.props.onHide} className="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login error</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Invalid username or password. Please try again.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginModal;
