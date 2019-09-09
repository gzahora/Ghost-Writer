import React, { Component } from 'react'

class ResolutionModal extends Component {
    render() {
        return (
            <div className="modal fade" id="resolutionModal" tabindex="-1" role="dialog"  aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Resolution</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>The resolution is the final solution in literature. Almost all the genres of storytelling make use of resolution to end a story. Actually, resolution is required to wrap up a story, and it comes after the climax. Following a heart-racing and anxiety-triggering climax, resolution gives audiences the opportunity to relax. It brings all disturbing conflicts into order, and helps the central theme of the movie or novel to resonate. Its function of resolving the problem has made it highly significant. The story would be a disaster if the resolution is presented poorly.</p>
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

export default ResolutionModal;
