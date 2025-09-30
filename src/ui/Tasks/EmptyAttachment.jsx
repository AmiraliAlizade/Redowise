import attachCircle2 from "../../images/textalign-justifycenter.svg";
import folder from "../../images/folder-2.svg";
import calendar from "../../images/calendar.svg";

function EmptyAttachment() {
  return (
    <div className="flex flex-col justify-between w-full gap-[6px]">
      <div className="flex items-center gap-1">
        <img src={attachCircle2} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">
          Attachment
        </p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[#687372] font-normal text-[10px]/[150%]">No file</p>
      </div>
    </div>
  );
}

export default EmptyAttachment;
