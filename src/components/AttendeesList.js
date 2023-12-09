import React from 'react';
import { connect } from 'react-redux';
import { removeAttendee } from '../actions/attendeeActions';

const AttendeesList = ({ attendees, removeAttendee }) => {

    
  return (
    <ul>
      {attendees.map(attendee => (
        <li key={attendee.id}>
          {attendee.name} - {attendee.color}
          <button onClick={() => removeAttendee(attendee.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    attendees: state.attendeeReducer.attendees
  };
};

export default connect(mapStateToProps, { removeAttendee })(AttendeesList);
