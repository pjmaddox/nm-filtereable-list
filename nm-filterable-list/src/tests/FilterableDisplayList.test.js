import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterableDisplayList from '../components/FilterableDisplayList.jsx'
import SpyItem from '../components/SpyItem'

configure({ adapter: new Adapter() });

let shallowNode, mockData;

beforeEach(() => {
    shallowNode = shallow(<FilterableDisplayList displayList={[]} />);
});

it("should display the text 'No items in the list based on your search parameters =(' when the displayList is empty", () => {
    expect(shallowNode.contains("No items in the list based on your search parameters =(")).toEqual(true);
});

it("should be initialized with alpha-ascending sort", () => {
    expect(shallowNode.state("sortOrder")).toEqual("alpha-ascending");
});

it("should render one or more SpyItem's when displayList is not empty", () => {
    let shallowNode = shallow(<FilterableDisplayList displayList={ [1] } />)

    expect(shallowNode.contains(<SpyItem />)).toEqual(true);
});