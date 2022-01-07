import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('shows summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('shows start-date and timezone', () => {
    expect(EventWrapper.find('.start-date')).toHaveLength(1);
  });

  test('shows location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('renders the show/hide details button', () => {
    expect(EventWrapper.find('.show-details-btn')).toHaveLength(1);
  });


  test('Element collapsed by default', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('User can click on button to expand details', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.show-details-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('Click on hide-details button to hide the event details', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.hide-details-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});
