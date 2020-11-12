import { Icon, InlineIcon } from "@iconify/react";
import backhandIndexPointingDown from "@iconify-icons/emojione/backhand-index-pointing-down";
import emailIcon from "@iconify-icons/carbon/email";
import discordIcon from "@iconify-icons/logos/discord";
import ContactForm from "../templates/ContactForm";
import "../styles/Elements.css";
import "../styles/Link.css";

const Contact = () => {
  return (
    <div className="Contact text-light">
      <h1 className="text-center mt-5 mb-4 pt-3 section-title">Contact Me</h1>
      <div className="container">
        <div className="font-em text-center my-3">
          You can fill the form <InlineIcon icon={backhandIndexPointingDown} />{" "}
          if you have something for me.
        </div>
        <ContactForm />

        <div id="other-contact" className="my-4">
          <h3>Other ways to Contact Me: </h3>
          <div title="Email">
            <a
              href="mailto:clusmsyknight@gmail.com"
              className="email-link mx-3 mb-2"
            >
              <Icon icon={emailIcon} width="40" height="40" />{" "}
              clusmsyknight@gmail.com
            </a>
          </div>
          <div title="Discord">
            <a
              target="_blank"
              rel="noreferrer"
              className="discord-link ml-3"
              title="Discord Username"
              href="https://discord.com/channels/@me/"
            >
              <Icon icon={discordIcon} width="40" height="40" />{" "}
              Clumsyknight#5550
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
