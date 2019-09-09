import React, { Component } from 'react'

class ClimaxModal extends Component {
    render() {
        return (
            <div className="modal fade" id="climaxModal" tabindex="-1" role="dialog"  aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Climax</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>A climax in a story occurs when there is a turning point from which there is no going back. The climax is the point of highest tension in a narrative. In a tragedy, the climax will generally reveal the protagonist’s greatest weaknesses, and the situation will go irreparably wrong.</p>
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

export default ClimaxModal;
