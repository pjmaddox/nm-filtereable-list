import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SpyItem from '../components/SpyItem';

configure({ adapter: new Adapter() });

let shallowNode, expectedCodeName, expectedCountryOfOrigin, expectedFullName;

beforeEach(() => {
    expectedCodeName = "the perfect example text";
    expectedCountryOfOrigin = "the most sinister country";
    expectedFullName = "Rand Althor"
    shallowNode = shallow(<SpyItem spyImage="" codeName={expectedCodeName} fullName={expectedFullName} countryOfOrigin={expectedCountryOfOrigin}/>);
});

it("should render the item's codeName", () => {
    expect(shallowNode.html().includes(expectedCodeName)).toEqual(true);
});

it("should display the agent's fullName", () => {
    expect(shallowNode.html().includes(expectedFullName)).toEqual(true);
});

it("should display the agent's countryOfOrigin", () => {
    expect(shallowNode.html().includes(expectedCountryOfOrigin)).toEqual(true);
});
