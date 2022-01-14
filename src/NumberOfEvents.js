import React, { Component } from "react";

class NumberOfEvents extends Component {

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number-of-events"
          value={this.state.numberOfEvents}
          onChange={(e) => this.props.updateNumberOfEvents(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;