import flag from "../../images/flag.svg";
import people from "../../images/people.svg";
import notificationBing from "../../images/notification-bing.svg";
import messageText from "../../images/message-text.svg";
import taskSquare from "../../images/task-square.svg";

import TaskInfoImages from "./TaskInfoImages";

function SumTaskInfo2() {
  return (
    <div className="flex p-[6px] bg-white rounded-[6px] justify-between w-full ">
      <div className="flex gap-[12px] items-center">
        <TaskInfoImages />
        <img src={flag} alt="" className="w-[13px] h-[13px]" />
        <img src={notificationBing} alt="" className="w-[13px] h-[13px]" />
        <div className="flex gap-[2px] items-center">
          <img src={messageText} alt="" />
          <p>3</p>
        </div>
        <div className="flex gap-[2px]">
          <img src={taskSquare} alt="" />
          To Do
        </div>
      </div>
      <div className="flex gap-[4px] items-center ">
        <img src={people} alt="" />
        <p className="text-[#7B61FF] text-[10px]/[150%] font-normal whitespace-nowrap">
          UI Team
        </p>
      </div>
    </div>
  );
}

export default SumTaskInfo2;
