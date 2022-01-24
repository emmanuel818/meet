import React, { Component } from "react";
import { ErrorAlert } from './Alert';
import { WarningAlert } from './Alert';

class NumberOfEvents extends Component {

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Number of Events:</p>
        <input
          type="number"
          className="number-of-events"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateNumberOfEvents(e)}
        />
        <ErrorAlert className='error-alert' text={this.props.errorText} />
        {!navigator.onLine ? (
          <WarningAlert className="Alert" text="You're offline, the events list has been loaded from the Cache" />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NumberOfEvents;