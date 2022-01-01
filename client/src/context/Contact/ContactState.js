import React, { useReducer } from "react";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";
import ContactContext from "./contactContext";
import contactReducer from './contactReducer';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jhon@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "sarha Johnson",
        email: "sara@gmail.com",
        phone: "112-112-1112",
        type: "personal",
      },
      {
        id: 3,
        name: "Hello peter",
        email: "hello@gmail.com",
        phone: "131-131-1311",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);


//   Add Contact

//   Delete Contact

// Set current contact

//   Clear Current contact


// Upadate current Contact

// Filter contact

// Clear Filter

  return (
      <ContactContext.Provider value = {{
          contacts : state.contacts
      }}>
          {props.children}
      </ContactContext.Provider>
  )
};



export default ContactState;  
