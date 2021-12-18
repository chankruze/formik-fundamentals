/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Dec 18 2021 10:13:19 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import { useFormik } from "formik";
import styles from "./YoutubeForm.module.css";

// Steps to add formik to a form:
// 1. pass initial values object to formik
// 2. add formik.handleChange and formik.values to the form inputs
// 3. add formik.handleSubmit to the form

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.form_div}>
      <form onSubmit={formik.handleSubmit}>
        {/* name input */}
        <div className={styles.wrapper_div}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            // name attribute is required
            name="name"
            id="name"
            onChange={formik.handleChange}
            // value corresponds to name attribute
            value={formik.values.name}
            placeholder="Chadan Kumar Mandal"
          />
        </div>
        {/* email input */}
        <div className={styles.wrapper_div}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            // name attribute is required
            name="email"
            id="email"
            onChange={formik.handleChange}
            // value corresponds to name attribute
            value={formik.values.email}
            placeholder="example@domain.xyz"
          />
        </div>
        {/* channel input */}
        <div className={styles.wrapper_div}>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            // name attribute is required
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            // value corresponds to name attribute
            value={formik.values.channel}
            placeholder="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"
          />
        </div>
        {/* submit button */}
        <div className={styles.wrapper_div}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default YoutubeForm;
