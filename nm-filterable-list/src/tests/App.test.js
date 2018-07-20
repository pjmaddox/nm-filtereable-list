import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterableDisplayList from '../components/FilterableDisplayList.jsx'
import CustomThrobber from '../components/CustomThrobber.jsx'

configure({ adapter: new Adapter() });

jest.mock("../services/AgentService.js");
let shallowNode, mockAgentData, mockAgentData2;

beforeEach(() => {
  shallowNode = shallow(<App />);
  mockAgentData = [
    { codeName: "someCodeName1", agentImage: "someAgentImage1", country: "someCountry1", fullName: "Some FullName1" },
    { codeName: "someCodeName2", agentImage: "someAgentImage2", country: "someCountry2", fullName: "Some FullName2" },
    { codeName: "someCodeName3", agentImage: "someAgentImage3", country: "someCountry3", fullName: "Some FullName3" },
    { codeName: "someCodeName4", agentImage: "someAgentImage4", country: "someCountry4", fullName: "Some FullName4" }
  ];
  mockAgentData2 = [
    { codeName: "someCodeName5", agentImage: "someAgentImage5", country: "someCountry5", fullName: "Some FullName5" }
  ];
  global.fetch = jest.fn();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
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

  expect(shallowNode.contains(<FilterableDisplayList displayList={mockAgentData}/>)).toEqual(true);
});

it("should begin without a display list, ie: not display a list when isLoading is true", () =>  {
  shallowNode.setState({ isLoading: true });
  
  expect(shallowNode.contains(<FilterableDisplayList displayList={[]} />)).toEqual(false);
});

it("should change set the itemList to parameter when setAgentList is called", () => {
  shallowNode.instance().setAgentList(mockAgentData2);

  shallowNode.update();

  expect(shallowNode.state("itemList")).toEqual(mockAgentData2);
});
