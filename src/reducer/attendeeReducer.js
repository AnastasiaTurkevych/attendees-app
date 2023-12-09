import { ADD, REMOVE } from "../actions/actionsTypes";

const initialState = {
    attendees: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD:
        return {
          attendees: [...state.attendees, { id: state.attendees.length + 1, ...action.payload }]
        };
      case REMOVE:
        return {
          attendees: state.attendees.filter(attendee => attendee.id !== action.payload.id)
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  