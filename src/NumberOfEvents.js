import React, { Component } from "react";

class NumberOfEvents extends Component {

  render() {
    return (
      <div className="NumberOfEvents">
        <label>Number of Events: <br></br>
          <input
            type="number"
            className="number-of-events"
            value={this.props.numberOfEvents}
            onChange={(e) => this.props.updateNumberOfEvents(e)}
          />
        </label>
      </div>
    );
  }
}

export default NumberOfEvents;