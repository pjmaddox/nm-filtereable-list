import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DoSomethingButton extends Component {
    render() {
        return (
            <div className="doSomethingBUttonContainer">
                <input type="button" onClick={this.props.somethingToDo} />
            </div>
        );
    }
};

DoSomethingButton.propTypes = {
    somethingToDo: PropTypes.func.isRequired
};

export default DoSomethingButton;