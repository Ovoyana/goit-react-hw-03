import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;
const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Not enough characters!")
      .max(50, "Too many characters")
      .required("Is required!!!"),
      number: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("Is required!!!"),
  });

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };
 

  export default function ContactForm({onAdd}){
    const nameContactId = useId();
    const numberContactId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({ 
            id: nanoid(), 
            ...values });
        actions.resetForm();
      };
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form  className={css.form}>
        <div className={css.field}>
          <label className={css.text} htmlFor={nameContactId}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameContactId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.field}>
          <label className={css.text} htmlFor={numberContactId}>Number</label>
          <Field className={css.input} type="text" name="number" id={numberContactId} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}