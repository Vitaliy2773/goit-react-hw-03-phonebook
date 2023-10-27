export const loadContacts = startContacts => {
  try {
    const stringifiedContacts = localStorage.getItem('contacts');
    return JSON.parse(stringifiedContacts) || startContacts;
  } catch (error) {
    console.error('Error:', error);
    return startContacts;
  }
};

export const saveContacts = contacts => {
  try {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  } catch (error) {
    console.error('Error:', error);
  }
};
