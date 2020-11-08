import { Icon } from "@iconify/react";
import fileTypeHtml from "@iconify-icons/vscode-icons/file-type-html";
import fileTypeCss from "@iconify-icons/vscode-icons/file-type-css";
import fileTypeJsOfficial from "@iconify-icons/vscode-icons/file-type-js-official";
import bootstrapIcon from "@iconify-icons/logos/bootstrap";
import fileTypeReactts from "@iconify-icons/vscode-icons/file-type-reactts";
import nodejsIcon from "@iconify-icons/logos/nodejs-icon";
import fileTypePug from "@iconify-icons/vscode-icons/file-type-pug";
import fileTypeMongo from "@iconify-icons/vscode-icons/file-type-mongo";

const Languages = (props) => {
  const { languages } = props;
  return (
    <div className="Languages d-flex justify-content-around align-content-center flex-wrap ">
      {languages.html && (
        <span title="HTML">
          <Icon icon={fileTypeHtml} width="40" height="40" />
        </span>
      )}
      {languages.css && (
        <span title="CSS">
          <Icon icon={fileTypeCss} width="40" height="40" />
        </span>
      )}
      {languages.js && (
        <span title="Javascript">
          <Icon icon={fileTypeJsOfficial} width="40" height="40" />
        </span>
      )}
      {languages.bootstrap && (
        <span title="Bootstrap">
          <Icon icon={bootstrapIcon} width="40" height="40" />
        </span>
      )}
      {languages.react && (
        <span title="React">
          <Icon icon={fileTypeReactts} width="40" height="40" />
        </span>
      )}
      {languages.node && (
        <span title="Node">
          <Icon icon={nodejsIcon} width="40" height="40" />
        </span>
      )}
      {languages.pug && (
        <span title="PUG">
          <Icon icon={fileTypePug} width="40" height="40" />
        </span>
      )}
      {languages.mongo && (
        <span title="MongoDB">
          <Icon icon={fileTypeMongo} width="40" height="40" />
        </span>
      )}
    </div>
  );
};
export default Languages;