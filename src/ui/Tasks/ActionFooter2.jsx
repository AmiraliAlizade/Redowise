import arrowUp from "../../images/arrow-up.svg";
import ActionButton from "../ActionButton";
import close from "../../images/Icon.svg";

import tickCircle from "../../images/tick-circle.svg";

function ActionFooter2() {
  return (
    <footer className="flex gap-[6px] justify-between w-full">
      <div className="flex items-center gap-1 cursor-pointer">
        <p className="whitespace-nowrap font-normal text-[#6873720] text-[10px]/[150%]  ">
          Show less
        </p>
        <img src={arrowUp} alt="" />
      </div>
      <div className="flex gap-[10px]">
        <ActionButton>
          <img src={close} alt="" className="cursor-pointer" />
          Reject
        </ActionButton>
        <ActionButton>
          <img src={tickCircle} alt="" className="cursor-pointer" />
          Accept
        </ActionButton>
      </div>
    </footer>
  );
}

export default ActionFooter2;
