import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpyItem from './SpyItem';
import _ from "lodash";

class FilterableDisplayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOrder: "asc"
        };
    }
    render() {
        let things = (this.props.displayList.length===0)? <span>No items in the list based on your search parameters =(</span> 
            : this.props.displayList.map((item, index) => (
                <SpyItem key={"item" + index} codeName={item.codeName} spyImage={item.agentImage} isEvenRow={index%2==0}/>
            ));
        return (
            <div className="filterableDisplayListContainer">
                {things}
            </div>
        );
    }
}

FilterableDisplayList.propTypes = {
    displayList: PropTypes.array.isRequired
}

export default FilterableDisplayList;