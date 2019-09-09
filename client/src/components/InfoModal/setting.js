import React, { Component } from 'react'

class SettingModal extends Component {
    render() {
        return (
            <div className="modal fade" id="settingModal" tabindex="-1" role="dialog"  aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Setting</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>The setting of a piece of literature is the time and place in which the story takes place. The definition of setting can also include social statuses, weather, historical period, and details about immediate surroundings. Settings can be real or fictional, or a combination of both real and fictional elements. Some settings are very specific (Wulfhall in Wiltshire England in 1500), while others are descriptive (a boat out on the ocean). Most pieces of literature include more—or many more—than one setting, either as the narrative progresses through time or to include points of view from more than one character.</p>
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

export default SettingModal;
