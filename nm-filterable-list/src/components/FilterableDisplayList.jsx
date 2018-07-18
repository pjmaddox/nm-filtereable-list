import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpyItem from './SpyItem';

class FilterableDisplayList extends Component {
    render() {
        let things = (this.props.displayList.length===0)? <span>No items in the list based on your search parameters =(</span> 
            : this.props.displayList.map((item, index) => (
                <SpyItem key={"item" + index} codeName={item.codeName} spyImage={item.agentImage} countryOfOrigin={item.country} fullName={item.name}/>
            ));
        return (
            <div className="filterableDisplayListContainer row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12">
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            {things}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

FilterableDisplayList.propTypes = {
    displayList: PropTypes.array.isRequired
}

export default FilterableDisplayList;