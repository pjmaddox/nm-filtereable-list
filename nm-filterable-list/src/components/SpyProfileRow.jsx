import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SpyProfileRow extends Component {
    render() {
        return (
            <div className="spyProfileRowContainer row">
                <div className="col-sm-6 profileRowLabel">
                    { this.props.rowLabel }
                </div>
                <div className="col-sm-6 profileRowValue">
                    { this.props.rowValue }
                </div>
            </div>
        );
    }
}

SpyProfileRow.propTypes = {
    rowLabel: PropTypes.string.isRequired,
    rowValue: PropTypes.string.isRequired
};

export default SpyProfileRow;