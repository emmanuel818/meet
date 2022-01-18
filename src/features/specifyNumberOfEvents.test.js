import React from "react";
import { shallow, mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('user hasn’t specified any number of events', () => {

    });
    let NumberOfEventsWrapper;
    when('the user opens the home page', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    then('the user should see 32 events by default', () => {
      NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    });
  });


  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('user is in the home page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specifies the number of events they want to see', () => {
      const eventNumberIput = { target: { value: 8 } };
      AppWrapper.find('.number-of-events').simulate('change', eventNumberIput);
    });

    then('that specified number will be shown', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ numberOfEvents: 8 });
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(8);
    });
  });
});