import ContactForm from "../templates/ContactForm";
import "../styles/Elements.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h1 className="text-center my-5 pt-3 section-title">Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
