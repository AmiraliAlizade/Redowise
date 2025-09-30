import task from "../../images/task.svg";
import ActionFooter from "./ActionFooter";
import SumTaskInfo from "./SumTaskInfo";

function DraftSumTask() {
  return (
    <div className="flex">
      <div className="w-[4px] bg-[#687372] rounded-l-[8px]"></div>
      <div className=" bg-[#F2F7F7] py-[8px] px-[12px] gap-[9px] flex flex-col justify-center items-center w-full">
        <header className="flex gap-[6px] w-full items-center ">
          <img src={task} alt="" />
          <p className="text-[12px]/[16px] font-normal tracking-[0.4px] text-[#1C1B1F]">
            Design the main screens of the application{" "}
          </p>
        </header>
        <SumTaskInfo />
        <ActionFooter />
      </div>
    </div>
  );
}

export default DraftSumTask;
