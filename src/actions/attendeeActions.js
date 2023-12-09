import { ADD, REMOVE } from "./actionsTypes";


function addAttendee (name, color){
    return{
        type: ADD,
        payload: { name, color }

    }
}


function removeAttendee (id) {

    return{
      type: REMOVE,
      payload: { id }
    }

}


export{
    addAttendee, removeAttendee
}
  