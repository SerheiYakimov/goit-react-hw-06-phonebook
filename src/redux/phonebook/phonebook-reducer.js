import { createReducer } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, handleFilter } from './phonebook-actions'
// import types from './phonebook-types';

const initialState = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];


export const contactsReducer = createReducer(initialState, {
[addNewContact]: (state, { payload }) => [...state, payload],
[deleteContact]: (state, { payload }) =>
state.filter(contact => contact.id !== payload),
});



export const filterReducer = createReducer('', {
  [handleFilter]: (_, { payload }) => payload,
});


// const contactsReducer = (state = initialState, { type, payload }) => {
//    switch (type) {
//      case types.ADD:
//       return [...state, payload];
     
     
//      case types.DELETE:
//        return state.filter((el) => el.id !== payload.id);
     
//      default:
//        return state;
//    }
//  }
  
// const filterReducer = (state = '', {type, payload}) => {
//     switch (type) {
//       case types.HANDLE_FILTER:
//         return payload;
//      default:
//        return state;
//    }
// }

