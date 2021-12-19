/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Dec 18 2021 10:13:19 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaPhone,
  FaPhoneAlt,
  FaPlus,
  FaRegTimesCircle,
} from "react-icons/fa";
import styles from "./YoutubeForm.module.css";
import { useState } from "react";

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
  address: "",
  social: {
    facebook: "",
    twitter: "",
    instagram: "",
    github: "",
  },
  phoneNumbers: ["", ""],
  hobbies: [],
};

// mock data
const savedData = {
  name: "Chandan Kumar Mandal",
  email: "chankruze@gmail.com",
  channel: "geekofia",
  address: "Zobra, Cuttack - 753003",
  social: {
    facebook: "chankruze",
    twitter: "chankruze",
    instagram: "chankruze",
    github: "chankruze",
  },
  phoneNumbers: ["8144356767", "9205639328"],
  hobbies: ["tv-series", "reading", "comedy"],
};

// onSubmit function
const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  // TODO: add wait for API call to return
  onSubmitProps.setSubmitting(false);
  // may clear the fields
  onSubmitProps.resetForm();
};

// step 1: define validation object schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  // channel: Yup.string().required("Channel is required"),
});

const ErrorComponent = ({ children }) => {
  return (
    <div className={styles.error_div}>
      <p>{children}</p>
    </div>
  );
};

const validateField = (value) => {
  let error;
  if (!value) {
    error = "This field is required";
  }
  return error;
};

// TODO: add validation for unique email/username (check the db)
// eslint-disable-next-line no-unused-vars
const checkIfEmailExistsOnDb = (email) => {
  // TODO: check if email exists on db
  return false;
};

// YoutubeFormV2 component
const YoutubeFormV2 = () => {
  const [formValues, setFormValues] = useState(null);

  return (
    <div className={styles.form_div}>
      <Formik
        initialValues={formValues || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // can disable validation
        // validateOnBlur={false}
        // validateOnChange={false}
        // validateOnMount (not recommended)
        enableReinitialize
      >
        {(formik) => (
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
              />
              <ErrorMessage name="name" component={ErrorComponent} />
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
              />
              <ErrorMessage name="email" component={ErrorComponent} />
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
                // Field level validation
                validate={validateField}
              />
              {/* field level validation */}
              <ErrorMessage name="channel" component={ErrorComponent} />
              {/* Demo using render props */}
              {/* <ErrorMessage name="channel">
              {(errorMsg) => (
                <div className={styles.error_div}>
                  <p>{errorMsg}</p>
                </div>
              )}
            </ErrorMessage> */}
            </div>
            {/* address Field (textarea) */}
            {/* render props */}
            <div className={styles.wrapper_div}>
              <label htmlFor="address">Address</label>
              <Field
                name="address"
                // Field level validation
                validate={validateField}
              >
                {
                  // render props
                  ({ field, form, meta }) => {
                    return (
                      <div>
                        <textarea
                          id="address"
                          placeholder="Cecilia Chapman&#10;711-2880 Nulla St.&#10;Mankato Mississippi 96522&#10;(257) 563-7401"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <div className={styles.error_div}>
                            <p>{meta.error}</p>
                          </div>
                        )}
                      </div>
                    );
                  }
                }
              </Field>
            </div>
            {/* social */}
            <div className={styles.group_wrapper}>
              <div className={styles.group_heading}>
                <div className={styles.group_bar}></div>
                <p className={styles.group_title}>Social</p>
                <div className={styles.group_bar}></div>
              </div>
              <div className={styles.handle_wrapper}>
                <label htmlFor="facebook">
                  <FaFacebook size={32} />
                </label>
                <Field
                  type="text"
                  name="social.facebook"
                  id="facebook"
                  placeholder="chankruze"
                />
              </div>
              <div className={styles.handle_wrapper}>
                <label htmlFor="twitter">
                  <FaTwitter size={32} />
                </label>
                <Field
                  type="text"
                  name="social.twitter"
                  id="twitter"
                  placeholder="chankruze"
                />
              </div>
              <div className={styles.handle_wrapper}>
                <label htmlFor="instagram">
                  <FaInstagram size={32} />
                </label>
                <Field
                  type="text"
                  name="social.instagram"
                  id="instagram"
                  placeholder="chankruze"
                />
              </div>
              <div className={styles.handle_wrapper}>
                <label htmlFor="github">
                  <FaGithub size={32} />
                </label>
                <Field
                  type="text"
                  name="social.github"
                  id="github"
                  placeholder="chankruze"
                />
              </div>
            </div>
            {/* phone number fields */}
            <div className={styles.group_wrapper}>
              <div className={styles.group_heading}>
                <div className={styles.group_bar}></div>
                <p className={styles.group_title}>phone numbers</p>
                <div className={styles.group_bar}></div>
              </div>
              <div className={styles.handle_wrapper}>
                <label htmlFor="phone 1">
                  <FaPhone size={32} />
                </label>
                <Field
                  type="text"
                  name="phoneNumbers[0]"
                  id="primaryPhone"
                  placeholder="0123456789"
                />
              </div>
              <div className={styles.handle_wrapper}>
                <label htmlFor="twitter">
                  <FaPhoneAlt size={32} />
                </label>
                <Field
                  type="text"
                  name="phoneNumbers[1]"
                  id="secondaryPhone"
                  placeholder="0123456789"
                />
              </div>
            </div>

            <div className={styles.group_wrapper}>
              <div className={styles.group_heading}>
                <div className={styles.group_bar}></div>
                <p className={styles.group_title}>hobbies</p>
                <div className={styles.group_bar}></div>
              </div>
              <FieldArray name="hobbies">
                {({
                  push,
                  remove,
                  form: {
                    values: { hobbies },
                  },
                }) => {
                  console.log(hobbies);
                  return (
                    <div>
                      {hobbies.map((hobby, index) => (
                        <div key={index} className={styles.hobby_wrapper}>
                          <Field name={`hobbies[${index}]`} />
                          <button type="button" onClick={() => remove(index)}>
                            <FaRegTimesCircle size={24} />
                          </button>
                        </div>
                      ))}
                      <div>
                        <button
                          type="button"
                          onClick={() => push("")}
                          className={styles.btn_add_hobby}
                        >
                          <FaPlus size={16} />
                          <p>Add hobby</p>
                        </button>
                      </div>
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            {/* validation buttons */}
            <div className={styles.validation_div}>
              {/* validate field */}
              {/* <button
                type="button"
                onClick={() => {
                  formik.setFieldTouched("channel");
                  formik.validateField("channel");
                }}
              >
                validate channel
              </button> */}
              {/* validate all */}
              {/* <button
                type="button"
                onClick={() => {
                  formik.setTouched({
                    name: true,
                    email: true,
                    channel: true,
                    address: true,
                  });
                  formik.validateForm();
                }}
              >
                validate form
              </button> */}
              <button type="button" onClick={() => setFormValues(savedData)}>
                load saved data
              </button>
              <button type="reset">reset form</button>
            </div>
            {/* submit button */}
            <div className={styles.wrapper_div}>
              <button
                type="submit"
                // for dirty (initialize fields with empty values)
                disabled={
                  !(formik.isValid && formik.dirty) || formik.isSubmitting
                }
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default YoutubeFormV2;
