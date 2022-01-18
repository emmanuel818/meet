Feature: Specify the number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given user hasn’t specified any number of events
    When the user opens the home page
    Then the user should see 32 events by default

  Scenario: User can change the number of events they want to see
    Given user is in the home page
    When the user specifies the number of events they want to see
    Then that specified number will be shown

