import React, { Component } from "react";

class Event extends Component {
  state = {
    event: {},
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className='event'>
        <h1 className="summary">{event.summary}</h1>
        <div className="event-body">
          <p className="start-date">
            {event.start.dateTime} ({event.start.timeZone})
          </p>

          <p className="location">@{event.summary} | {event.location}</p>

          {!collapsed && (
            <div
              className={`extra-details ${this.state.collapsed ? 'hide' : 'show'}`}>
              <br />
              <p className="event-description">{event.description}</p>
            </div>
          )}

        </div>


        <button
          id='eventDetails'
          className={`${collapsed ? 'show' : 'hide'}-details-btn`}
          onClick={this.handleClick}
        >
          {collapsed ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}

export default Event;