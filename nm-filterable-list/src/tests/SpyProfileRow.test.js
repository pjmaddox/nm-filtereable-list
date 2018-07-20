import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SpyProfileRow from '../components/SpyProfileRow.jsx';

configure({ adapter: new Adapter() });

let shallowNode, expectedRowLabel, expectedRowValue;

beforeEach(() => {
    expectedRowLabel = "Smurf Name";
    expectedRowValue = "Smurftrick";
    shallowNode = shallow(<SpyProfileRow rowLabel={expectedRowLabel} rowValue={expectedRowValue}/>);
});

it("should render the label", () => {
    expect(shallowNode.contains(expectedRowLabel)).toEqual(true);
});

it("should render the value", () => {
    expect(shallowNode.contains(expectedRowValue)).toEqual(true);
});