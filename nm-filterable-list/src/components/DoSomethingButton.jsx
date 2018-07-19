import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DoSomethingButton extends Component {
    render() {
        return (
            <div className="doSomethingBUttonContainer">
                <button onClick={this.props.somethingToDo} >{this.props.buttonText}</button>
            </div>
        );
    }
};

DoSomethingButton.propTypes = {
    somethingToDo: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
};

export default DoSomethingButton;