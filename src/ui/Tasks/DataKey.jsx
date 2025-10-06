import attachCircle2 from "../../images/textalign-justifycenter.svg";

import folder from "../../images/folder-2.svg";
import lock2 from "../../images/lock2.svg";

import arrowDown from "../../images/arrow-down.svg";

import calendar from "../../images/calendar.svg";
import Vector from "./Vector";

function DataKey() {
  return (
    <div className="flex w-full">
      <div className="w-[4px] bg-[#7B61FF] rounded-l-[8px]"></div>
      <div className=" bg-[#F2F7F7] p-3 gap-[9px] flex flex-col justify-start  w-full">
        <div className="flex items-center gap-1">
          <img src={lock2} alt="" />
          <p className="text-[#687372] font-normal text-[10px]/[150%]">
            data key
          </p>
        </div>

        {/* <DataKeyAttachment /> */}
        <div className="flex flex-col justify-between w-full gap-[6px] ">
          <div className="flex flex-col py-2 gap-[9px] px-[10px] bg-white rounded-[10px]">
            <div className="flex justify-between items-center gap-1">
              <div className="flex gap-[3px]">
                <p className="text-black font-normal text-[14px]/[20px] tracking-[0.25px]">
                  *********
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <p className="whitespace-nowrap font-normal text-[#6873720] text-[10px]/[150%]  ">
                  Show more
                </p>
                <img src={arrowDown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataKey;
