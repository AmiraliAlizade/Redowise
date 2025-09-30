import adsign from "../../images/@.svg";
import TaskInfoImages from "./TaskInfoImages";

function Assigne() {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center gap-1">
        <img src={adsign} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">Assigne</p>
      </div>
      <div className="flex gap-[5px] items-center">
        <TaskInfoImages size={24} />
        <p className="text-[#1C1B1F] text-[12px]/[16px] tracking-[0.4px] font-normal">
          3 people Assigned{" "}
        </p>
      </div>
    </div>
  );
}

export default Assigne;
