import flag2 from "../../images/flag2.svg";

function Priority() {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="flex items-center gap-1">
        <img src={flag2} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">
          Priority
        </p>
      </div>
      <p className="text-[#BA1A1A] text-[12px]/[16px] tracking-[0.4px] font-normal">
        High Priority
      </p>
    </div>
  );
}

export default Priority;
