import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpyItem from './SpyItem';
import _ from 'lodash';
import FilterInputWithCallBack from './FilterInputWithCallback';

class FilterableDisplayList extends Component {
    constructor(props) {
        super(props);
        this.state = { filteredDisplayList: this.props.displayList };
    }
    updateFilteredList(newFilterString) {
        this.setState({
            filteredDisplayList: _.filter(this.props.displayList, (item) => {
                return (item.country + item.name + item.codeName).replace(/\s/g, '').toLowerCase().includes(newFilterString.toLowerCase())
            })
        });
    }
    render() {
        let listItems = (this.state.filteredDisplayList.length===0)? <span>No items in the list based on your search parameters =(</span> 
            : this.state.filteredDisplayList.map((item, index) => (
                <SpyItem key={"item" + index} codeName={item.codeName} spyImage={item.agentImage} countryOfOrigin={item.country} fullName={item.name}/>
            ));
        return (
            <div className="filterableDisplayListContainer row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12">
                            <FilterInputWithCallBack updateCallback={this.updateFilteredList.bind(this)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            {listItems}
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