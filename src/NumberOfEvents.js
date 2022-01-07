import React, { Component } from "react";

class NumberOfEvents extends Component {

  render() {
    return (
      <div className="NumberOfEvents">
        <p>
          <b>Number of Events: </b>
        </p>
        <input
          type='number'
          className="newValue"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateNumberOfEvents(e)}
        />
      </div>
    );
  }
}


export default NumberOfEvents;