import axios from "axios";
import { ContactType } from "../_types/contact";

const API_URL = "http://localhost:3001";

// get all user contacts
export const getContacts = async (userId: string) => {
  const response = await axios.get(`${API_URL}/contacts`, {
    params: { userId },
  });
  return response.data;
};

// get user contact by id
export const getContactById = async (id: string) => {
  console.log("Fetching contact ID::::::::::::::", id);
  console.log("API URL being called::::::::::::::", `${API_URL}/contacts/${id}`);
  const response = await axios.get(`${API_URL}/contacts/${id}`);
  return response.data;
};

// add new contact
export const createContact = async (contactData: ContactType) => {
  const response = await axios.post(`${API_URL}/contacts`, contactData);
  return response.data;
};

// update contact
export const updateContact = async (id: string, contactData: ContactType) => {
  const response = await axios.put(`${API_URL}/contacts/${id}`, contactData);
  return response.data;
};

// delete contact
export const deleteContactn = async (id: string) => {
  console.log("Deleting contact ID::::::::::::::", id);
  const response = await axios.delete(`${API_URL}/contacts/${id}`);
  return response.data;
};