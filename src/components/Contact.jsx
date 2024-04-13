import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
        <div>
        <div className="set">
      <p className={css.input}> 
      <RiContactsFill className={css.icon} />
         {name}
      </p>
      </div>
      <div className="set">
      <p className={css.input}> 
      <FaPhone className={css.icon} />
         {number}
      </p>
      </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

