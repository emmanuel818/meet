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

    });

    then('the user shouldn’t see the details of event', () => {

    });
  });



  test('User can expand an event to see its details.', ({ given, when, then }) => {

    given('user has clicked on the event', () => {

    });

    when('the user clicks', () => {

    });

    then('the user should see the details of event', () => {

    });
  });



  test('User can collapse an event to hide its details.', ({ given, when, then }) => {

    given('user has clicked on the event again', () => {

    });

    when('the user clicks', () => {

    });

    then('the event details will hide', () => {

    });
  });
});
