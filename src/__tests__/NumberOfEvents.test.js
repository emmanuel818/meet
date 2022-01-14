import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('Render text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('Render text input correctly from prop', () => {
    expect(NumberOfEventsWrapper);
  });
});
