import { Icon } from "@iconify/react";
import fileTypeHtml from "@iconify-icons/vscode-icons/file-type-html";
import fileTypeCss from "@iconify-icons/vscode-icons/file-type-css";
import fileTypeJsOfficial from "@iconify-icons/vscode-icons/file-type-js-official";
import bootstrapIcon from "@iconify-icons/logos/bootstrap";
import fileTypeReactts from "@iconify-icons/vscode-icons/file-type-reactts";
import nodejsIcon from "@iconify-icons/logos/nodejs-icon";
import fileTypePug from "@iconify-icons/vscode-icons/file-type-pug";
import fileTypeMongo from "@iconify-icons/vscode-icons/file-type-mongo";
import vueIcon from "@iconify-icons/logos/vue";
import webpackIcon from "@iconify-icons/logos/webpack";
import gitIcon from "@iconify-icons/logos/git-icon";
import jqueryIcon from "@iconify-icons/logos/jquery";
import firebaseIcon from "@iconify-icons/logos/firebase";
import fileTypeVscode from "@iconify-icons/vscode-icons/file-type-vscode";
import fileTypePhotoshop from "@iconify-icons/vscode-icons/file-type-photoshop";
import githubInverted from "@iconify-icons/codicon/github-inverted";
import npmIcon from "@iconify-icons/logos/npm";
import ubuntuIcon from "@iconify-icons/logos/ubuntu";

const Languages = (props) => {
  const { languages, className } = props;
  return (
    <div className={`${className}`}>
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
      {languages.react && (
        <span title="React">
          <Icon icon={fileTypeReactts} width="40" height="40" />
        </span>
      )}
      {languages.vue && (
        <span title="Vue">
          <Icon icon={vueIcon} width="40" height="40" />
        </span>
      )}
      {languages.node && (
        <span title="Node">
          <Icon icon={nodejsIcon} width="40" height="40" />
        </span>
      )}
      {languages.bootstrap && (
        <span title="Bootstrap">
          <Icon icon={bootstrapIcon} width="40" height="40" />
        </span>
      )}
      {languages.jQuery && (
        <span title="jQuery">
          <Icon icon={jqueryIcon} width="40" height="40" />
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
      {languages.webpack && (
        <span title="Webpack">
          <Icon icon={webpackIcon} width="40" height="40" />
        </span>
      )}
      {languages.git && (
        <span title="Git">
          <Icon icon={gitIcon} width="40" height="40" />
        </span>
      )}
      {languages.github && (
        <span title="Github">
          <Icon icon={githubInverted} color="black" width="40" height="40" />
        </span>
      )}
      {languages.npm && (
        <span title="NPM">
          <Icon icon={npmIcon} width="40" height="40" />
        </span>
      )}
      {languages.firebase && (
        <span title="Firebase">
          <Icon icon={firebaseIcon} width="40" height="40" />
        </span>
      )}
      {languages.vscode && (
        <span title="Visual Studio Code">
          <Icon icon={fileTypeVscode} width="40" height="40" />
        </span>
      )}
      {languages.photoshop && (
        <span title="Adobe Photoshop">
          <Icon icon={fileTypePhotoshop} width="40" height="40" />
        </span>
      )}
      {languages.ubuntu && (
        <span title="Linux Ubuntu">
          <Icon icon={ubuntuIcon} width="40" height="40" />
        </span>
      )}
    </div>
  );
};
export default Languages;
