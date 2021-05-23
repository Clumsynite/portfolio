import React, { useState } from "react";
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
    if (email.trim().length === 0) {
      e.target.classList.remove("is-valid");
      e.target.classList.remove("is-invalid");
    } else if (!emailRegex.test(email)) {
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
    } else {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    }
  };

  const initialiseForm = () => {
    setname("");
    setemail("");
    document.querySelector("#email-input").classList.remove("is-valid");
    setmessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setsending(true);
    try {
      const data = await sendMail({
        name,
        email,
        message,
        website: "https://clumsynite.github.io/portfolio/#/contact",
      });
      setsending(false);
      if (data.status === "success") {
        notify(true);
        initialiseForm();
      } else if (data.status === "fail") {
        notify(false);
      }
    } catch (error) {
      setsending(false);
      notify(false);
      console.error(error);
    }
  };

  const sendMail = async (form) => {
    try {
      const response = await fetch(
        "https://clumsy-gmail.herokuapp.com/send/v1",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
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
    <form className="mx-3 form-card p-4" onSubmit={handleSubmit}>
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
            id="email-input"
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
