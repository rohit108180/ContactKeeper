import React, { useReducer } from "react";
import axios from 'axios';

import {
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_CONTACT,
  CLEAR_FILTER,
  CONTACT_ERROR
} from "../types";
import ContactContext from "./contactContext";
import contactReducer from './contactReducer';

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    current : null,
    filtered: null,
    error: null,
    loading :true
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);


  // GET CONTACT 
  const getContact = async () =>{
    try {
      const res = await axios.get('/api/contacts');
      // console.log(res.data);
      dispatch({type:GET_CONTACT, payload: res.data});


    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        paylaod: err.response.msg
      })
      
    }


  }





//   Add Contact
  const addContact = async (contact) =>{
    const config={
      headers :{
        'Content-Type' : 'application/json'
      }
    }


    try {
      const res = await axios.post('/api/contacts', contact, config);
      // console.log(res.data);
      dispatch({type:ADD_CONTACT, payload: res.data});


    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        paylaod: err.response.msg
      })
      
    }


  }

//   Delete Contact

const deleteContact = async(id) =>{

  try {
     await axios.delete(`/api/contacts/${id}`);
    dispatch({
       type:DELETE_CONTACT,
       payload: id
    });

  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      paylaod: err.response.msg
    })
    
  }
}



// Set current contact

const setCurrent = (contact) =>{
  dispatch({type:SET_CURRENT, payload: contact});
}

// Clear Current contact
const clearCurrent = () =>{
  dispatch({type:CLEAR_CURRENT});
}


// Upadate current Contact

const updateContact = async (contact) =>{

  const config={
    headers :{
      'Content-Type' : 'application/json'
    }
  }

  try {
    const res = await axios.put(`/api/contacts/${contact._id}`, contact);

    dispatch({
      type: UPDATE_CONTACT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
  }
   
 

}

// Filter contact

const filterContact = (text) =>{
  dispatch({type: FILTER_CONTACT, payload: text});
}

// Clear Filter
const clearFilter = () =>{
  dispatch({type: CLEAR_FILTER});
}


  return (
      <ContactContext.Provider value = {{
          contacts : state.contacts,
          current : state.current, 
          filtered: state.filtered,
          error: state.error,
          loading: state.loading,
          addContact,
          deleteContact,
          getContact,
          setCurrent,
          clearCurrent,
          updateContact,
          filterContact,
          clearFilter
      }}>
          {props.children}
      </ContactContext.Provider>
  )
};



export default ContactState;  
