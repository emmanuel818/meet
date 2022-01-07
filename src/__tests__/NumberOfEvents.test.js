import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('Render text input', () => {
    expect(NumberOfEventsWrapper.find('.newValue')).toHaveLength(1);
  });

  test('Render text input correctly from prop', () => {
    const numberOfEvents = NumberOfEventsWrapper.prop('numberofEvents');
    expect(NumberOfEventsWrapper.find('.newValue').prop('value')).toBe(numberOfEvents);
  });
});
