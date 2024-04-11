import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
    return (
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Task data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
  }
  