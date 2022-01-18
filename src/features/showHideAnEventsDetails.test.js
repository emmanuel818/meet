import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('user hasn’t clicked on anything', () => {

    });
    when('the user see’s the event', () => {
      const EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });
    let EventWrapper, eventDetails;
    then('the user shouldn’t see the details of event', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      eventDetails = EventWrapper.find('.event .extra-details');
    });
  });



  test('User can expand an event to see its details.', ({ given, when, then }) => {
    let EventWrapper;
    given('user has clicked on the event', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.state('collapsed')).toBe(true);
    });

    when('the user clicks', () => {
      const showDetailsButton = EventWrapper.find('.show-details-btn');
      showDetailsButton.simulate('click');
    });

    then('the user should see the details of event', () => {
      expect(EventWrapper.state('collapsed')).toBe(false);
    });
  });



  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    let EventWrapper;
    given('user has clicked on the event again', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ collapsed: false });
    });

    when('the user clicks', () => {
      const HideDetailsButton = EventWrapper.find('.hide-details-btn');
      HideDetailsButton.simulate('click');
    });

    then('the event details will hide', () => {
      expect(EventWrapper.state('collapsed')).toBe(true);
    });
  });
});
