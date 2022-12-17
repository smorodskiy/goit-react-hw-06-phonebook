import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/loadFromStore':
//       return { ...state, contacts: action.payload };
//     case 'contacts/add':
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     case 'contacts/delete':
//       return {
//         ...state,
//         contacts: state.contacts.filter(({ id }) => id !== action.payload),
//       };
//     case 'contacts/filter':
//       return { ...state, filter: action.payload };
//     default:
//       return state;
//   }
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
