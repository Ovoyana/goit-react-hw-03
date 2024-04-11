
import './App.css'

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("saved-contacts"));
    if (savedContacts !== null && savedContacts !== undefined && savedContacts.length !== undefined) {
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

  const [contactName, setContactName] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contactName", JSON.stringify(contactName));
  });

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  function searchContact(contacts, contactName) {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(contactName));
  }

  function addContact(contact) {
    setContacts((prev) => [...prev, contact]);
  }

  function deleteContact(id) {
    setContacts(contacts.filter((prev) => prev.id !== id));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox contactName={contactName} setContactName={setContactName} />
      {contacts.length > 0 ? (
        <ContactList contacts={filterContacts} deleteContact={deleteContact} />
      ) : (
        <p className="text">Sorry, not found any contacts!</p>
      )}
    </div>
  );
}