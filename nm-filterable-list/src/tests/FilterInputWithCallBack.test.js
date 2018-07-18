import { shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import FilterInputWithCallBack from '../components/FilterInputWithCallback';

configure({ adapter: new Adapter()});

let shallowNode, mockCallback, expectedDataList;

beforeEach(() => {
    mockCallback = jest.fn();
    expectedDataList = [];
    shallowNode = shallow(<FilterInputWithCallBack displayList={expectedDataList}/>);
});

it("should render an input with type='text'", () => {

});
