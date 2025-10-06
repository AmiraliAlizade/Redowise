import attachCircle2 from "../../images/textalign-justifycenter.svg";
import folder from "../../images/folder-2.svg";
import arrowUp from "../../images/arrow-up.svg";
import attachCircle from "../../images/attach-circle.svg";
import calendar from "../../images/calendar.svg";
import Vector from "./Vector";

function DataKeyAttachment() {
  return (
    <div className="flex flex-col justify-between w-full gap-[6px] ">
      <div className="flex flex-col py-2 gap-[9px] px-[10px] bg-white rounded-[10px]">
        <div className="flex items-center gap-1">
          <img src={attachCircle2} alt="" />
          <p className="text-[#687372] font-normal text-[10px]/[150%]">
            Attachment
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <span className="rounded-2 w-[42px] h-[42px] bg-[#4ec5bd14] flex items-center justify-center">
              <img src={folder} alt="" />
            </span>
            <div className="flex flex-col gap-[2px] justify-center">
              <p>New Document.pdf</p>
              <span className="w-[50px]  bg-[#4ec5bd14] flex items-center justify-center rounded-[40px] ">
                <p className="text-[#4EC5BD]  text-[12px]/[16px] text-[#687372] font-normal tracking-[0.4px] ">
                  1,2MB
                </p>
              </span>
            </div>
          </div>
        </div>
        <Vector />
        <p className="text-[#687372] font-normal text-[10px]/[150%] ">
          Principles and standards that must be followed in the design
          filesAttachment
        </p>
        <Vector />
        <div className="flex justify-between items-center gap-1">
          <div className="flex gap-[3px]">
            <img src={calendar} alt="" />
            <p className="text-[#687372] font-normal text-[10px]/[150%]">
              Last Update: Sep 17, 4:29 PM
            </p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <p className="whitespace-nowrap font-normal text-[#6873720] text-[10px]/[150%]  ">
              Show less
            </p>
            <img src={arrowUp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataKeyAttachment;
