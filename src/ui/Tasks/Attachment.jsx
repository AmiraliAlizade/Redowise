import attachCircle2 from "../../images/textalign-justifycenter.svg";
import folder from "../../images/folder-2.svg";
import calendar from "../../images/calendar.svg";

function Attachment() {
  return (
    <div className="flex flex-col justify-between w-full gap-[6px]">
      <div className="flex items-center gap-1">
        <img src={attachCircle2} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">
          Attachment
        </p>
      </div>
      <div className="flex py-2 px-[10px] bg-white rounded-[10px]">
        <div className="flex justify-between gap-4">
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
      <p className="text-[#687372] font-normal text-[10px]/[150%] ">
        Principles and standards that must be followed in the design
        filesAttachment
      </p>
      <div className="flex items-center gap-1">
        <img src={calendar} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">
          Sep 17, 4:29 PM
        </p>
      </div>
    </div>
  );
}

export default Attachment;
