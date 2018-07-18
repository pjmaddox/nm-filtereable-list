import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterableDisplayList from '../components/FilterableDisplayList.jsx'
import SpyItem from '../components/SpyItem'
import FilterInputWithCallBack from '../components/FilterInputWithCallback';

configure({ adapter: new Adapter() });

let shallowNode, mockData;

beforeEach(() => {
    mockData = [
        { agentImage: "someImage1", name: "Torts Malone", country: "Germany", codeName: "Binding of Isaac: Golden" },
        { agentImage: "someImage2", name: "The Amazin George", country: "Japan", codeName: "Golden Axe" },
        { agentImage: "someImage3", name: "Fitz Ferdinand", country: "Japan", codeName: "Ogre Battle 64" }
    ];
    shallowNode = shallow(<FilterableDisplayList displayList={mockData} />);
});

it("should display the text 'No items in the list based on your search parameters =(' when the displayList is empty", () => {
    let shallowNode = shallow(<FilterableDisplayList  displayList={[]} />);
    expect(shallowNode.contains("No items in the list based on your search parameters =(")).toEqual(true);
});

it("should render one or more SpyItem's when displayList is not empty", () => {
    let shallowNode = shallow(<FilterableDisplayList displayList={ [{codeName: "", country: "", agentImage: "", name: ""}] } />)
    expect(shallowNode.find("SpyItem").length).toEqual(1);
});

it("should render one SpyItem's per display list item", () => {
    let shallowNode = shallow(<FilterableDisplayList displayList={ [1, 2, 3] } />)

    expect(shallowNode.find("SpyItem").length).toEqual(3);
});

it("should render one FilterInputWithCallBack", () => {
    expect(shallowNode.find("FilterInputWithCallBack").length).toEqual(1);
});

it("should display items when matched filtered text with country", () => {
    shallowNode.instance().updateFilteredList("Japan");
    expect(shallowNode.state("filteredDisplayList").length).toEqual(2);
    expect(shallowNode.contains(<SpyItem agentImage={"someImage2"} name={"The Amazin George"} country={"Japan"} codeName={"Golden Axe"}  />));
    expect(shallowNode.contains(<SpyItem agentImage={"someImage3"} name={"Fitz Ferdinand"} country={"Japan"} codeName={"Ogre Battle 64"}  />));
});

it("should display items when matched filteredText for country, non-case-sensitive", () => {
    shallowNode.instance().updateFilteredList("JAPAN");

    expect(shallowNode.state("filteredDisplayList").length).toEqual(2);
    expect(shallowNode.contains(<SpyItem agentImage={"someImage2"} name={"The Amazin George"} country={"Japan"} codeName={"Golden Axe"}  />));
    expect(shallowNode.contains(<SpyItem agentImage={"someImage3"} name={"Fitz Ferdinand"} country={"Japan"} codeName={"Ogre Battle 64"}  />));
});


it("should display items when matched filteredText for codeName, non-case-sensitive", () => {
    shallowNode.instance().updateFilteredList("GOLDEN");

    expect(shallowNode.state("filteredDisplayList").length).toEqual(2);
    expect(shallowNode.contains(<SpyItem agentImage={"someImage2"} name={"The Amazin George"} country={"Japan"} codeName={"Golden Axe"}  />));
    expect(shallowNode.contains(<SpyItem agentImage={"someImage1"} name={"Torts Malone"} country={"Germany"} codeName={"Binding Of Isaac: Golden"}  />));
});

it("should display items when matched filteredText for name, non-case-sensitive", () => {
    shallowNode.instance().updateFilteredList("OR");

    expect(shallowNode.state("filteredDisplayList").length).toEqual(2);
    expect(shallowNode.contains(<SpyItem agentImage={"someImage2"} name={"The Amazin George"} country={"Japan"} codeName={"Golden Axe"}  />));
    expect(shallowNode.contains(<SpyItem agentImage={"someImage1"} name={"Torts Malone"} country={"Germany"} codeName={"Binding Of Isaac: Golden"}  />));
});

it("should display all items when matched filteredText is empty", () => {
    shallowNode.instance().updateFilteredList("");

    expect(shallowNode.state("filteredDisplayList").length).toEqual(3);
    expect(shallowNode.contains(<SpyItem agentImage={"someImage3"} name={"Fitz Ferdinand"} country={"Japan"} codeName={"Ogre Battle 64"}  />));
    expect(shallowNode.contains(<SpyItem agentImage={"someImage2"} name={"The Amazin George"} country={"Japan"} codeName={"Golden Axe"}  />));
    expect(shallowNode.contains(<SpyItem agentImage={"someImage1"} name={"Torts Malone"} country={"Germany"} codeName={"Binding Of Isaac: Golden"}  />));
});