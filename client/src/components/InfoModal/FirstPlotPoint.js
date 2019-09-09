import React, { Component } from 'react'

class FirstPlotPointModal extends Component {
    render() {
        return (
            <div className="modal fade" id="plotPointModal" tabindex="-1" role="dialog"  aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">First Plot Point</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>The first major plot point changes everything. This is the point of no return for your characters. Often, this plot point will be the Key Event. The first plot point is the moment when the setup ends, and your character crosses his personal Rubicon. But this isn’t just an event that happens to him (such as the kidnapping of the heroine’s son in Changeling). This is an event that either incorporates or is directly followed by the character’s reacting in a strong and irrevocable way (for example, Changeling’s heroine’s decision to fight back against the police). We’ll be discussing the reaction in more detail in a future post.</p>
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

export default FirstPlotPointModal;
