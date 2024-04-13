import css from './App.module.css';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import { PiBookOpenTextLight } from "react-icons/pi";


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("saved-contacts"));
    if (savedContacts?.length) {
      return savedContacts;
    } else {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);


    const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

    const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
    };
    
     const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
    };
    
  return (
    <div className={css.box}>
      <h1 className={css.title}><PiBookOpenTextLight className={css.icon}/>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={search} onFilter={setSearch}/>
      <ContactList contacts={filterContacts} onDelete={deleteContact}/>
    </div>
  );
}