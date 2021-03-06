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
          <div className="d-flex justify-content-between flex-wrap">
            <div title="Email">
              <a
                href="mailto:rishabhjpathak@gmail.com?subject=Hi Rishabh"
                className="email-link mb-2"
              >
                <Icon icon={emailIcon} width="40" height="40" />{" "}
                rishabhjpathak@gmail.com
              </a>
            </div>
            <div title="Discord">
              <a
                target="_blank"
                rel="noreferrer"
                className="discord-link "
                title="Copy Username and Open Discord"
                href="https://discord.com/channels/@me/"
                onClick={(e) => {
                  const el = document.createElement("textarea");
                  el.value = e.target.textContent;
                  document.body.appendChild(el);
                  el.select();
                  document.execCommand("copy");
                  document.body.removeChild(el);
                }}
              >
                <Icon icon={discordIcon} width="40" height="40" />{" "}
                Clumsyknight#5550
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
