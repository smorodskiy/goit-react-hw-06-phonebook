export const addContact = contact => {
  return {
    type: 'contacts/add',
    payload: contact,
  };
};
