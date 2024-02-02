import axios from 'axios';

axios.defaults.baseURL = 'https://65bccc66b51f9b29e9324e62.mockapi.io/';

export const getContacts = async () => {
  const result = await axios.get('/contacts');
  return result.data;
};

export const createContact = async data => {
  const result = await axios.post('/contacts', data);
  return result.data;
};

export const deleteContactApi = async id => {
  const result = await axios.delete(`/contacts/${id}`);
  return result.data;
};