import Assigne from "./Assigne";
import Attachment from "./Attachment";
import Description from "./Description";
import Draft from "./Draft";
import DueDate from "./DueDate";
import Priority from "./Priority";
import Reminder from "./Reminder";
import Tag from "./Tag";
import TaskTitle from "./TaskTitle";
import Team from "./Team";
import Vector from "./Vector";
import Workspace from "./Workspace";
import Comment from "./Comment";

import ActionFooter2 from "./ActionFooter2";

function IncompleteTask() {
  return (
    <div className="flex w-full">
      <div className="w-[4px] bg-[#687372] rounded-l-[8px]"></div>
      <div className=" bg-[#F2F7F7] py-[8px] px-[12px] gap-[9px] flex flex-col justify-start items-center w-full">
        <Draft />
        <TaskTitle />
        <Vector />
        <Assigne />
        <Vector />
        <Reminder />
        <Vector />
        <div className="flex justify-between gap-12 w-full">
          <DueDate />
          <Priority />
        </div>
        <Vector />

        <div className="flex justify-between gap-16 w-full">
          <Workspace />
          <Team />
          <Tag />
        </div>
        <Vector />
        <Description />
        <Vector />
        <Attachment />
        <Vector />
        <Comment />
        <Vector />
        <ActionFooter2 />
      </div>
    </div>
  );
}

export default IncompleteTask;
