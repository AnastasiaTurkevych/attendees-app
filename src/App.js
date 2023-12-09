import React from 'react';
import AttendeesList from './components/AttendeesList';
import AttendeeForm from './components/AttendeeForm';

function App() {
  return (
    <div className="App">
      <h1>Attendees App</h1>
      <AttendeeForm />
      <AttendeesList />
    </div>
  );
}

export default App;
