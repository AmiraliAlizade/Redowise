import briefcase2 from "../../images/briefcase2.svg";

function Workspace() {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="flex items-center gap-1">
        <img src={briefcase2} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">
          Workspace
        </p>
      </div>
      <p className="text-[#1C1B1F] text-[12px]/[16px] tracking-[0.4px] font-normal whitespace-nowrap">
        Product Design
      </p>
    </div>
  );
}

export default Workspace;
