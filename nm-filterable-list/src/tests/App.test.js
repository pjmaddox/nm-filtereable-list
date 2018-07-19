import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterableDisplayList from '../components/FilterableDisplayList.jsx'
import CustomThrobber from '../components/CustomThrobber.jsx'

configure({ adapter: new Adapter() });

let shallowNode, mockAgentData;

beforeEach(() => {
  shallowNode = shallow(<App />);
  mockAgentData = [
    { codeName: "agentCodeName1", agentImage: "agentImage1" },
    { codeName: "agentCodeName2", agentImage: "agentImage2" },
    { codeName: "agentCodeName3", agentImage: "agentImage3" }
  ];
  global.fetch = jest.fn();
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
  expect(shallowNode.state("itemList")).toEqual([]);
});

it("should begin without a display list, ie: not display a list when isLoading is true", () =>  {
  expect(shallowNode.contains(<FilterableDisplayList displayList={[]} />)).toEqual(false);
});

it("should begin with a loading icon", () => {
  expect(shallowNode.contains(<CustomThrobber />)).toEqual(true);
});

it("should begin without a filter input element", () => {
  expect(shallowNode.find("input").length).toEqual(0);
});

it("should render a FilterableDisplayList when isLoading is false", () => {
  shallowNode.setState({ isLoading: false });

  expect(shallowNode.contains(<FilterableDisplayList displayList={[]}/>)).toEqual(true);
});

it("should begin without a display list, ie: not display a list when isLoading is true", () =>  {
  shallowNode.setState({ isLoading: true });
  
  expect(shallowNode.contains(<FilterableDisplayList displayList={[]} />)).toEqual(false);
});

it("should change set the itemList to parameter when setAgentList is called", () => {
  shallowNode.instance().setAgentList(mockAgentData);

  expect(shallowNode.state("itemList")).toEqual(mockAgentData);
})
