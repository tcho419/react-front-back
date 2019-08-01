import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Lapse',
        email: 'lapse@halcyon.com',
        phone: '123-123-2222',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Ariella',
        email: 'ari@halcyon.com',
        phone: '123-123-3333',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Mayple',
        email: 'may@halcyon.com',
        phone: '123-123-4444',
        type: 'personal'
      },
      {
        id: 4,
        name: 'Clout',
        email: 'clout@halcyon.com',
        phone: '123-123-8888',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // delete contact

  // set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
