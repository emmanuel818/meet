Feature: Show/Hide an Event's Details

  Scenario: An event element is collapsed by default.
    Given user hasn’t clicked on anything
    When the user see’s the event
    Then the user shouldn’t see the details of event

  Scenario: User can expand an event to see its details.
    Given user has clicked on the event
    When the user clicks
    Then the user should see the details of event

  Scenario: User can collapse an event to hide its details.
    Given user has clicked on the event again
    When the user clicks
    Then the event details will hide
