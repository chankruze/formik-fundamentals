/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Dec 18 2021 10:13:19 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./YoutubeForm.module.css";

// Steps to add formik to a form:
// 1. pass initial values object to formik
// 2. add formik.handleChange and formik.values to the form inputs
// 3. add formik.handleSubmit to the form
// 4. add validation function to formik

// initial values object
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

// onSubmit function
const onSubmit = (values) => {
  console.log(values);
};

// step 1: define validation object schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  channel: Yup.string().required("Channel is required"),
});

// YoutubeFormV2 component
const YoutubeFormV2 = () => {
  return (
    <div className={styles.form_div}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          {/* name Field */}
          <div className={styles.wrapper_div}>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              // name attribute is required
              name="name"
              id="name"
              placeholder="Chadan Kumar Mandal"
              className={styles.input_field}
            />
            <ErrorMessage name="name" />
          </div>
          {/* email Field */}
          <div className={styles.wrapper_div}>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              // name attribute is required
              name="email"
              id="email"
              placeholder="example@domain.xyz"
              className={styles.input_field}
            />
            <ErrorMessage name="email" />
          </div>
          {/* channel Field */}
          <div className={styles.wrapper_div}>
            <label htmlFor="channel">Channel</label>
            <Field
              type="text"
              // name attribute is required
              name="channel"
              id="channel"
              placeholder="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"
              className={styles.input_field}
            />
            <ErrorMessage name="channel" />
          </div>
          {/* submit button */}
          <div className={styles.wrapper_div}>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default YoutubeFormV2;
