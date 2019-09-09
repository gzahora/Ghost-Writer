import React, { Component } from 'react'

class MidpointModal extends Component {
    render() {
        return (
            <div className="modal fade" id="midpointModal" tabindex="-1" role="dialog"  aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Midpoint</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>A midpoint in the realm of story structure is the point where your character moves from reactionary to action. They make the leap to start going after their problem instead of running from it.</p>
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

export default MidpointModal;
