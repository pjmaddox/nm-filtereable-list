import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterInputWithCallBack extends Component {
    constructor(props) {
        super(props);
        this.state = { currentText: "" };
        this.onUpdate = this.onUpdate.bind(this);
    }
    onUpdate(event) {
        this.setState({currentText: event.target.value});
        this.props.updateCallback(this.state.currentText);
    }
    render() {
        return (
            <div className="filterInputWithCallBackContainer row">
                <div className="col-sm-12">
                    <input type="text" value={this.state.currentText} onChange={this.onUpdate} />
                </div>
            </div>
        );
    }
}

FilterInputWithCallBack.propTypes = {
    updateCallback: PropTypes.func.isRequired
};

export default FilterInputWithCallBack;