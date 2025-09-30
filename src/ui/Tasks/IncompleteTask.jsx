import TaskTitle from "./TaskTitle";
import Vector from "./Vector";
import ActionFooter2 from "./ActionFooter2";
import EmptyAssigne from "./EmptyAssigne";
import EmptyReminder from "./EmptyReminder";
import EmptyDueDate from "./EmptyDueDate";
import EmptyPriority from "./EmptyPriority";
import EmptyWorkspace from "./EmptyWorkspace";
import EmptyTeam from "./EmptyTeam";
import EmptyTag from "./EmptyTag";
import EmptyDescription from "./EmptyDescription";
import EmptyAttachment from "./EmptyAttachment";
import Incomplete from "./Incomplete";

function IncompleteTask() {
  return (
    <div className="flex w-full">
      <div className="w-[4px] bg-[#687372] rounded-l-[8px]"></div>
      <div className=" bg-[#F2F7F7] py-[8px] px-[12px] gap-[9px] flex flex-col justify-start items-center w-full">
        <Incomplete />
        <TaskTitle />
        <Vector />
        <EmptyAssigne />
        <Vector />
        <EmptyReminder />
        <Vector />
        <div className="flex justify-between gap-12 w-full">
          <EmptyDueDate />
          <EmptyPriority />
        </div>
        <Vector />

        <div className="flex justify-between gap-16 w-full">
          <EmptyWorkspace />
          <EmptyTeam />
          <EmptyTag />
        </div>
        <Vector />
        <EmptyDescription />
        <Vector />
        <EmptyAttachment />
        <Vector />

        <ActionFooter2 />
      </div>
    </div>
  );
}

export default IncompleteTask;
