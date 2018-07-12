import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SpyProfileRow from '../components/SpyProfileRow.jsx';

configure({ adapter: new Adapter() });

let shallowNode, expectedCountryOfOrigin, expectedCodeName;

beforeEach(() => {
    expectedCodeName = "007";
    expectedCountryOfOrigin = "Great Britain";
    shallowNode = shallow(<SpyProfileRow codeName={expectedCodeName} countryOfOrigin={expectedCountryOfOrigin}/>);
});

it("should render the country of origin", () => {
    expect(shallowNode.contains(expectedCountryOfOrigin)).toEqual(true);
});

it("should render the codeName", () => {
    expect(shallowNode.contains(expectedCodeName)).toEqual(true);
});