import task from "../../images/task.svg";

function TaskTitle() {
  return (
    <div className="flex flex-col w-full">
      <header className="flex gap-1">
        <img src={task} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">
          Task Title
        </p>
      </header>
      <p className="text-[#1C1B1F] text-[12px]/[16px] tracking-[0.4px] font-normal">
        {" "}
        Design the main screens of the application
      </p>
    </div>
  );
}

export default TaskTitle;
