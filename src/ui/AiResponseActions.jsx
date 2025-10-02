import share from "../images/share.svg";
import copy from "../images/copy.svg";
import redo from "../images/redo.svg";

function AiResponseActions() {
  return (
    <div className="flex gap-6">
      <img src={redo} alt="redo" />
      <img src={share} alt="share" />
      <img src={copy} alt="copy" />
    </div>
  );
}

return AiResponseActions;
