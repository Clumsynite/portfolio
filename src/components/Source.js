import { InlineIcon } from "@iconify/react";
import heart from "@iconify-icons/ant-design/heart-filled";
import repoIcon from "@iconify-icons/codicon/repo";

const Source = () => {
  return (
    <div className="SOURCE text-light">
      <div>
        <a
          href="https://github.com/Clumsynite/portfolio"
          title="Portfolio Repository"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <InlineIcon icon={repoIcon} /> Repository
        </a>
      </div>
      <div className="pt-3 border-top border-danger">
        Made with <InlineIcon icon={heart} color="#BA3329" width="18" /> by{" "}
        <a
          href="https://github.com/Clumsynite"
          title="Github Profile"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Clumsyknight
        </a>
      </div>
    </div>
  );
};

export default Source;
