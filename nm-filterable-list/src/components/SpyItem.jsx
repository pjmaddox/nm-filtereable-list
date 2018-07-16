import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpyProfileRow from './SpyProfileRow';

class SpyItem extends Component {
    render() {
        return (
            <div className="spyItemContainer row">
                <div className="col-md-4 col-sm-12 avatarContainer" dangerouslySetInnerHTML={{__html: this.props.spyImage}}>
                </div>
                <div className="col-md-8 col-sm-12">
                    <SpyProfileRow 
                        rowLabel={"Code Name: "}
                        rowValue={this.props.codeName}
                    />
                </div>
            </div>
        );
    }
}

SpyItem.propTypes = {
    codeName: PropTypes.string.isRequired,
    spyImage: PropTypes.string.isRequired,
    isEvenRow: PropTypes.bool.isRequired
}

export default SpyItem;