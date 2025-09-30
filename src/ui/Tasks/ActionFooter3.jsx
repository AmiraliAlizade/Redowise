import arrowDown from "../../images/arrow-down.svg";
import ActionButton from "../ActionButton";
import close from "../../images/Icon.svg";
import share from "../../images/share.svg";
import forwardSquare from "../../images/forward-square.svg";

function ActionFooter3() {
  return (
    <footer className="flex gap-[6px] justify-between w-full">
      <div className="flex items-center gap-1">
        <p className="whitespace-nowrap font-normal text-[#6873720] text-[10px]/[150%]  ">
          Show less
        </p>
        <img src={arrowDown} alt="" />
      </div>
      <div className="flex gap-[12px]">
        <img src={share} alt="" />
        <img src={forwardSquare} alt="" />
        <ActionButton>
          <img src={close} alt="" />
          Reject
        </ActionButton>
      </div>
    </footer>
  );
}

export default ActionFooter3;
