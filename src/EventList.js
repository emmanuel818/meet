import React, { Component } from 'react';
import { WarningAlert } from './Alert';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className='EventList'>
        {!navigator.onLine ? (
          <WarningAlert text="You're offline, the events list has been loaded from the Cache" />
        ) : (
          ""
        )}
        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;