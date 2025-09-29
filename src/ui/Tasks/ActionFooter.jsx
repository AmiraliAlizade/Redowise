import arrowDown from "../../images/arrow-down.svg";
import ActionButton from "../ActionButton";
import close from "../../images/Icon.svg";
import tickCircle from "../../images/tick-circle.svg";

function ActionFooter() {
  return (
    <footer className="flex gap-[6px] justify-between w-full">
      <div className="flex items-center gap-1">
        <p className="whitespace-nowrap font-normal text-[#6873720] text-[10px]/[150%]  ">Show more</p>
        <img src={arrowDown} alt="" />
      </div>
      <div className="flex gap-[10px]">
        <ActionButton>
          <img src={close} alt="" />
        </ActionButton>
        <ActionButton>
          <img src={tickCircle} alt="" />
        </ActionButton>
      </div>
    </footer>
  );
}

export default ActionFooter;
