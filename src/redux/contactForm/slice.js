import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

export const initialState = {
  contacts: [],
  filter: '',
};

export const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   const isInContacts = state.contacts.find(
    //     contact => contact.name === action.payload.name
    //   );
    //   if (!isInContacts) {
    //     state.contacts.push(...action.payload);
    //   } else {
    //     toast.error('This contact is already in Phonebook');
    //   }
    // },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact, setFilter } = slice.actions;
