import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let shallowNode;

beforeEach(() => {
  shallowNode = shallow(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should begin in a loading state", () => {
  expect(shallowNode.state("isLoading")).toEqual(true);
});

it("should begin with a blank list of items", () =>  {
  expect(shallowNode.state("displayList")).toEqual([]);
});

it("should render a list of items", () =>  {
  expect(shallowNode.contains(<SortableDisplayList />)).toEqual(true);
});

it("should begin with a displayed list equal to the empty list", () =>  {

});
