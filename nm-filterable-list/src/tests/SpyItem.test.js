import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SpyItem from '../components/SpyItem';

configure({ adapter: new Adapter() });

let shallowNode, expectedCodeName, expectedCountryOfOrigin;

beforeEach(() => {
    expectedCodeName = "the perfect example text";
    expectedCountryOfOrigin = "the most sinister country";
    shallowNode = shallow(<SpyItem codeName={expectedCodeName} />);
});

it("should render the item's primary text", () => {
    expect(shallowNode.contains(expectedCodeName)).toEqual(true);
});

it("should display the agent's avatar", () => {
    expect(shallowNode.find("svg").length).toEqual(1);
});