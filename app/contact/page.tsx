"use client";
import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { useFormik } from "formik";
import { FiSend } from "react-icons/fi";
import * as YUP from "yup";
import "./page.css";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const serviceId = `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`;

  const sendEmail = (values: any) => {
    const templateParams = {
      from_name: `${values.name} - ${values.email}`,
      to_name: "Atif Razzaq",
      subject: values.subject,
      message: values.message,
    };

    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}` ?? "",
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}` ?? "",
        templateParams,
        { publicKey: `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}` }
      )
      .then(
        () => {
          console.log("Success!");
        },
        (error) => {
          console.log("Failed . . . ", error);
        }
      );
  };
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = YUP.object({
    name: YUP.string().required("Name requried!"),
    email: YUP.string().email("Invalid Email").required("Email required!"),
    subject: YUP.string().required("Subject required!"),
    message: YUP.string().required("Message required!"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: sendEmail,
  });

  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Never be Shy !</h3>

          <p className="contact_decription">
            Feel free to get in touch. I am always open to discuss new projects,
            creative ideas and opportunities to be part of your vision.
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className="info_icon" />

              <div>
                <span className="info_title">Mail Me: </span>
                <h4 className="info_desc">razzaq6atif@gmail.com</h4>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt className="info_icon" />

              <div>
                <span className="info_title">Call Me: </span>
                <h4 className="info_desc">+92 3028796500</h4>
              </div>
            </div>
          </div>

          <div className="contact_socials">
            <Link href="" className="contact_social_link">
              <FaFacebookF />
            </Link>

            <Link href="" className="contact_social_link">
              <FaLinkedinIn />
            </Link>

            <Link href="" className="contact_social_link">
              <FaGithub />
            </Link>

            <Link href="" className="contact_social_link">
              <FaDribbble />
            </Link>
          </div>
        </div>

        <form className="contact_form" onSubmit={formik.handleSubmit}>
          <div className="form_input_group">
            <div className="form_input">
              <input
                type="text"
                placeholder="Your Name"
                className="form_control"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <p className="errors">{formik.errors.name}</p>
              ) : null}
            </div>

            <div className="form_input">
              <input
                type="email"
                placeholder="Your Email"
                className="form_control"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="errors">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="form_input">
              <input
                type="text"
                placeholder="Your Subject"
                className="form_control"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.subject && formik.touched.subject ? (
                <p className="errors">{formik.errors.subject}</p>
              ) : null}
            </div>
          </div>

          <div className="form_input_div">
            <textarea
              placeholder="Your Message"
              className="form_control textarea"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.message && formik.touched.message ? (
              <p className="errors">{formik.errors.message}</p>
            ) : null}
          </div>

          <button className="button" type="submit">
            Send Message{" "}
            <span className="button_icon contact_button_icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
