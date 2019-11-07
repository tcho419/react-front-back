import React, { createContext, useReducer } from 'react';
import uuid from 'uuid';
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

export const contactContext = createContext();
const { Provider } = contactContext;

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Lapse',
        email: 'lapse@dis.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Clout',
        email: 'clout@dis.com',
        phone: '222-222-2222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Althilus',
        email: 'alth@dis.com',
        phone: '333-333-3333',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <Provider
      value={{
        contacts: state.contacts
      }}
    >
      {children}
    </Provider>
  );
};

export default ContactState;
