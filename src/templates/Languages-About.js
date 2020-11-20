import { InlineIcon } from "@iconify/react";
import fileTypeHtml from "@iconify-icons/vscode-icons/file-type-html";
import fileTypeCss from "@iconify-icons/vscode-icons/file-type-css";
import javascriptIcon from "@iconify-icons/logos/javascript";
import phpIcon from "@iconify-icons/logos/php";
import rubyIcon from "@iconify-icons/logos/ruby";
import mongodbIcon from "@iconify-icons/logos/mongodb";
import mysqlIcon from "@iconify-icons/logos/mysql";
import javaIcon from "@iconify-icons/logos/java";
import androidIcon from "@iconify-icons/logos/android";
import pythonIcon from "@iconify-icons/logos/python";
import githubInverted from "@iconify-icons/codicon/github-inverted";

const LanguageIcons = (props) => {
  const { icon, style } = props;
  return (
    <span style={style}>
      {icon.html && (
        <span title="HTML">
          <InlineIcon icon={fileTypeHtml} />
        </span>
      )}
      {icon.css && (
        <span title="CSS">
          <InlineIcon icon={fileTypeCss} />
        </span>
      )}
      {icon.javascript && (
        <span title="Javascript">
          <InlineIcon icon={javascriptIcon} />
        </span>
      )}
      {icon.php && (
        <span title="PHP">
          <InlineIcon icon={phpIcon} />
        </span>
      )}
      {icon.ruby && (
        <span title="Ruby">
          <InlineIcon icon={rubyIcon} />
        </span>
      )}
      {icon.nosql && (
        <span title="NoSQL">
          <InlineIcon icon={mongodbIcon} />
        </span>
      )}
      {icon.sql && (
        <span title="SQL">
          <InlineIcon icon={mysqlIcon} />
        </span>
      )}
      {icon.java && (
        <span title="Java">
          <InlineIcon icon={javaIcon} />
        </span>
      )}
      {icon.android && (
        <span title="Android">
          <InlineIcon icon={androidIcon} />
        </span>
      )}
      {icon.python && (
        <span title="Python">
          <InlineIcon icon={pythonIcon} />
        </span>
      )}
      {icon.github && (
        <span title="Github">
          <InlineIcon icon={githubInverted} />
        </span>
      )}
    </span>
  );
};

export default LanguageIcons;
