import note from "../../images/note-2.svg";
import edit from "../../images/edit-2.svg";
import trash from "../../images/trash.svg";
import ActionButton from "../ActionButton";
import tickCircle from "../../images/tick-circle.svg";
function Active() {
  return (
    <div className="flex bg-[#E6EDEB] p-[6px] justify-between rounded-[10px] w-full ">
      <div className="flex gap-[3px] p-[4px] items-center">
        <img src={tickCircle} alt="" />

        <p className="text-[12px]/[16px] text-[#4EC5BD] font-normal tracking-[0.4px]">
          Active
        </p>
      </div>
      <div className="flex gap-[6px]">
        <ActionButton>
          <img src={trash} alt="" />
        </ActionButton>
        <ActionButton>
          <div className="flex items-center gap-[5px]">
            <img src={edit} alt="" />
            <p className="text-[#455755] text-[12px]/[16px] font-normal tracking-[0.4px]">
              Edit Task
            </p>
          </div>
        </ActionButton>
      </div>
    </div>
  );
}

export default Active;
