import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should render properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should have a h2 tag", () => {
    const header = component.find('h2');
    expect(header.text()).toEqual("Leapyear Kata");
  });
});