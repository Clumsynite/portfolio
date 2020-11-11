import React, { useState, useEffect } from "react";
import { InlineIcon } from "@iconify/react";
import sendIcon from "@iconify-icons/carbon/send";
import { Bars as Spinner } from "@agney/react-loading";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Elements.css";

const ContactForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [sending, setsending] = useState(false);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailRegex = /\S+@\S+\.\S+/;
    setemail(email);
    if (!emailRegex.test(email)) {
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
    } else {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setsending(true);
    notify(true);
    setTimeout(() => {
      setsending(false);
    }, 5000);
  };

  const notify = (success) => {
    if (success) {
      toast.success("🦄 I have received your message.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("🦄 Oops! Looks like an internal Error.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <form className="m-5 form-card p-4" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name?"
            value={name || ""}
            onChange={(e) => {
              setname(e.target.value);
            }}
            minLength="3"
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
            value={email || ""}
            onChange={(e) => {
              handleEmailChange(e);
            }}
            required
          />
          <div className="invalid-feedback">Incorrect Email ID</div>
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
          value={message || ""}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
          required
          minLength="5"
        />
        <div className="valid-feedback">I am excited to read your message.</div>
        <div className="invalid-feedback">
          Please enter a bigger word in the textarea. If you trying to test the
          form, it works pretty well.
        </div>
      </div>
      <button
        type="submit"
        className={`btn btn-block btn-lg ${
          !sending ? "btn-primary" : "btn-light"
        }`}
        disabled={sending}
      >
        {!sending && (
          <div>
            Send <InlineIcon icon={sendIcon} />
          </div>
        )}
        {sending && (
          <div>
            <Spinner width="24" />
          </div>
        )}
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        transition={Flip}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
};

export default ContactForm;
