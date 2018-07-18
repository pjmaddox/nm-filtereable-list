import  React, { Component } from 'react';
import { shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import FilterInputWithCallBack from '../components/FilterInputWithCallback';

configure({ adapter: new Adapter()});

let shallowNode, mockCallback, expectedDataList;

beforeEach(() => {
    mockCallback = jest.fn();
    expectedDataList = [];
    shallowNode = shallow(<FilterInputWithCallBack updateCallback={mockCallback} />);
});

it("should render an input", () => {
    expect(shallowNode.find("input").length).toEqual(1);
});

it("should call the props callback when onUpate is called with the state.currentText", () => {
    const expectedUpdatedValue = "updatedValue"
    const filterInput = shallowNode.find("input").first();
    let event = { target: { name: "", value: expectedUpdatedValue } };
    filterInput.simulate('change', event);

    expect(mockCallback.mock.calls.length).toEqual(1);
    expect(mockCallback.mock.calls[0][0]).toEqual(expectedUpdatedValue);
});
