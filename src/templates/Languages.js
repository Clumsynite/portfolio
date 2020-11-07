import { Icon } from "@iconify/react";
import fileTypeHtml from "@iconify-icons/vscode-icons/file-type-html";
import fileTypeCss from "@iconify-icons/vscode-icons/file-type-css";
import fileTypeJsOfficial from "@iconify-icons/vscode-icons/file-type-js-official";
import bootstrapIcon from "@iconify-icons/logos/bootstrap";
import fileTypeReactts from "@iconify-icons/vscode-icons/file-type-reactts";
import nodejsIcon from "@iconify-icons/logos/nodejs-icon";
import fileTypePug from "@iconify-icons/vscode-icons/file-type-pug";

const Languages = (props) => {
  const { languages } = props;
  return (
    <div className="Languages d-flex justify-content-around align-content-center flex-wrap ">
      {languages.html && <Icon icon={fileTypeHtml} width="40" height="40" />}
      {languages.css && <Icon icon={fileTypeCss} width="40" height="40" />}
      {languages.js && (
        <Icon icon={fileTypeJsOfficial} width="40" height="40" />
      )}
      {languages.bootstrap && (
        <Icon icon={bootstrapIcon} width="40" height="40" />
      )}
      {languages.react && (
        <Icon icon={fileTypeReactts} width="40" height="40" />
      )}
      {languages.node && <Icon icon={nodejsIcon} width="40" height="40" />}
      {languages.pug && <Icon icon={fileTypePug} width="40" height="40" />}
    </div>
  );
};
export default Languages;
