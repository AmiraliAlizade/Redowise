import flag from "../../images/flag.svg";
import people from "../../images/people.svg";
import notificationBing from "../../images/notification-bing.svg";
import attachCircle from "../../images/attach-circle.svg";

import TaskInfoImages from "./TaskInfoImages";

function SumTaskInfo() {
  return (
    <div className="flex p-[6px] bg-white rounded-[6px] justify-between w-full ">
      <div className="flex gap-[12px] items-center">
        {/* <div className="flex -space-x-[8px] items-center">
          <span
            className=" w-[20px] h-[20px] border border-solid border-white bg-center rounded-[4px] bg-no-repeat "
            style={{
              backgroundImage: `url(${eImage})`,
              backgroundSize: "cover",
            }}
          ></span>
          <span
            className=" w-[20px] h-[20px] border border-solid border-white bg-center bg-no-repeat  rounded-[4px]"
            style={{
              backgroundImage: `url(${eImage})`,
              backgroundSize: "cover",
            }}
          ></span>
          <span
            className=" w-[20px] h-[20px] border border-solid border-white bg-center bg-no-repeat rounded-[4px]"
            style={{
              backgroundImage: `url(${eImage})`,
              backgroundSize: "cover",
            }}
          ></span>
        </div> */}
        <TaskInfoImages />
        <img src={flag} alt="" className="w-[13px] h-[13px]" />
        <img src={notificationBing} alt="" className="w-[13px] h-[13px]" />
        <img src={attachCircle} alt="" className="w-[13px] h-[13px]" />
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

export default SumTaskInfo;
