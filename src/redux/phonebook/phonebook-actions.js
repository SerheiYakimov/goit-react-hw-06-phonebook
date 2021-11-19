// import types from './phonebook-types';

import { createAction } from "@reduxjs/toolkit";

export const addNewContact = createAction('phonebook/add');
export const deleteContact = createAction('phonebook/delete');
export const handleFilter = createAction('phonebook/handleFilter');


// const addNewContact = (contact) => ({
//     type: types.ADD,
//     payload: contact,
// })

// const deleteContact = (id) => ({
//     type: types.DELETE,
//     payload: id,
// })

// const handleFilter = value => ({
//     type: types.HANDLE_FILTER,
//     payload: value,
// })

