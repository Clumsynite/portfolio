import React, { useState, useEffect } from "react";
import "../styles/Elements.css";

const ContactForm = () => {
  return (
    <form className="m-5 form-card p-4">
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name?"
            required
          />
          <div className="invalid-feedback">Name can't be empty</div>
          <div className="valid-feedback">Nice name, Looks good!</div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email address?"
            required
          />
          <div className="invalid-feedback">Email Id can't be empty</div>
          <div className="valid-feedback">Looks good!</div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message: </label>
        <textarea
          className="form-control"
          id="message"
          placeholder="Want to tell me something?"
          rows="4"
          required
        />
        <div className="valid-feedback">I am excited to read your message.</div>
        <div className="invalid-feedback">
          Please enter a message in the textarea. If you trying to test the
          form, it works pretty well.
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
