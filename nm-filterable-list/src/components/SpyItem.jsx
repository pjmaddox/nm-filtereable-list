import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpyProfileRow from './SpyProfileRow';

class SpyItem extends Component {
    render() {
        return (
            <div className="spyItemContainer row">
                <div className="col-md-4 col-sm-12">
                    { /* avatar placeholder */ }
                </div>
                <div className="col-md-8 col-sm-12">
                    <SpyProfileRow 
                        rowLabel={"Code Name: "}
                        rowValue={this.props.codeName}
                    />
                    {/* <SpyProfileRow 
                        rowLabel={"Origin: "}
                        rowValue={this.props.countryOfOrigin}
                    /> */}
                </div>
            </div>
        );
    }
}

SpyItem.propTypes = {
    codeName: PropTypes.string.isRequired,
    //countryOfOrigin: PropTypes.string.isRequired
}

export default SpyItem;