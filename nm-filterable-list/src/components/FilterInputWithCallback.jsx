import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterInputWithCallBack extends Component {
    constructor(props) {
        super(props);
        this.state = { currentText: "" };
        this.onUpdate = this.onUpdate.bind(this);
    }
    onUpdate(event) {
        let newText = event.target.value;
        this.setState({currentText: newText});
        this.props.updateCallback(newText);
    }
    render() {
        return (
            <div className="filterInputWithCallBackContainer row">
                <div className="col-sm-12">
                    <input className="agentFilterInput" type="text" value={this.state.currentText} onChange={this.onUpdate} placeholder="Filter Agents Here" />
                </div>
            </div>
        );
    }
}

FilterInputWithCallBack.propTypes = {
    updateCallback: PropTypes.func.isRequired
};

export default FilterInputWithCallBack;