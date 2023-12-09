import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAttendee } from '../actions/attendeeActions';

const AttendeeForm = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const dispatch = useDispatch ()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && color) {
        addAttendee(name, color);
        setName('');
        setColor('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Color:</label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        <button type="submit" onClick={ () => {dispatch(addAttendee)}}>Add attendee</button>
      </form>
    );
  };

// const AttendeeForm = ({ addAttendee }) => {
//   const [name, setName] = useState('');
//   const [color, setColor] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && color) {
//       addAttendee(name, color);
//       setName('');
//       setColor('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <label>Color:</label>
//       <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
//       <button type="submit">Add attendee</button>
//     </form>
//   );
// };

export default  AttendeeForm;
