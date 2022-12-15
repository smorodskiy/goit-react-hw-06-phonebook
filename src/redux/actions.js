export const addContact = contact => {
  return {
    type: 'contacts/add',
    payload: contact,
  };
};

export const deleteContact = id => {
    return {
        type: 'contacts/delete',
        payload: id,
    }
}
