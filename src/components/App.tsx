
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import initialContacts from "./contactsList.json";
import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./GlobalStyled";
import { WrapperContainer } from "./App.styled";
import { useEffect, useState } from "react";


const localStorageKey = 'contacts';

type Contact = {
  name: string;
  number: string;
  id: string;
};

export const App: React.FC = () => {
 const [contacts, setContacts] = useState<Contact[]>(() => {
  const savedContacts = localStorage.getItem(localStorageKey);
  if(savedContacts !== null){
    return JSON.parse(savedContacts) as Contact[];
  }
  return initialContacts;
 });
const [contactFilter, setContactFilter] = useState<string>('');



useEffect(() => {
  localStorage.setItem(localStorageKey, JSON.stringify(contacts));
}, [contacts])




const addContact = (newContact: Omit<Contact, "id">) => {
  const existingContact = contacts.find(
    contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  );

  if (existingContact) {
    toast.info(`${newContact.name} is already in contacts.`, {
      position: "top-right",
      autoClose: 2000,});
    return;
  }
  const newItem = {
    id: nanoid(),
    name: newContact.name,
    number: newContact.number,
  };

  setContacts(prevState => [...prevState, newItem]);
};

const resetChanges = () =>{
  setContacts(initialContacts);

};


const changeContactFilter = (newFilter: string) => {
  setContactFilter(newFilter);
};

const visibleContactItems = contacts.filter(contact =>
contact.name.toLowerCase().includes(contactFilter.toLowerCase())
);


const deleteContact = (contactId: string) => {
setContacts(prevState => prevState.filter(contact => contact.id !== contactId),
);
};

  return (
    <Layout>
      <WrapperContainer>
      <ContactForm onAdd={addContact} />
      <ContactList
        contacts={visibleContactItems}
        contactFilter={contactFilter}
        onChangeFilter={changeContactFilter}
        onDeleteContact={deleteContact}
        onReset={resetChanges}
      />
      <ToastContainer />
      </WrapperContainer>
      <GlobalStyle/>
    </Layout>
  );
};
