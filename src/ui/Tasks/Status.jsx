import status from "../../images/status.svg";
import taskSquare from "../../images/task-square.svg";
import arrowDown2 from "../../images/arrow-down2.svg";

function Status() {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center gap-1">
        <img src={status} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">Status</p>
      </div>
      <div className="flex gap-[5px] items-center bg-white py-1 px-[5px] rounded-[5px]">
        <div className="p-[6px] bg-white rounded-[6px] flex justify-center">
          <div className="flex gap-1">
         
            <img src={taskSquare} alt="" />
            <p className="">To Do</p>
            <img src={arrowDown2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
