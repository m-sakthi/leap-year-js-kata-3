import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import LeapYear from './LeapYear';

configure({adapter: new Adapter()});
describe('LeapYear Component', () => {
  let component;
  const wrapperQry = 'div[testId="wrapper"]';
  const inputEleQry = 'input[testId="enterYearInput"]';
  const resultSpan = 'span[testId="resultSpan"]';

  beforeEach(() => {
    component = shallow(<LeapYear />);
  });

  it("should render properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should have a div element", () => {
    expect((component.find(wrapperQry)).length).toBe(1);
  });

  it("should have a label element", () => {
    expect((component.find('label')).length).toBe(1);
  });

  it("should have a input number element", () => {
    expect((component.find(inputEleQry)).length).toBe(1);
  });

  it("should not show message if year is not entered", () => {
    expect(component.find(resultSpan).text()).toEqual('Enter a valid year.');
  });

  it("should set the entered year in state", () => {
    const year = 2020;

    component.find(inputEleQry).prop('onChange')({ target: { value: year } });

    expect(component.find(resultSpan).text()).toEqual(`Entered year is ${year}.`);
  });

  it("should show error message if year is given in negative", () => {
    const year = -123;

    component.find(inputEleQry).prop('onChange')({ target: { value: year } });

    expect(component.find(resultSpan).text()).toEqual('Enter a valid year!');
  });

});
