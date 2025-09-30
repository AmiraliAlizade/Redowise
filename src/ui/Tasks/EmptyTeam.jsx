import people2 from "../../images/people2.svg";

function EmptyTeam() {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="flex items-center gap-1">
        <img src={people2} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">
          Team
        </p>
      </div>
      <p className="text-[#1C1B1F] text-[12px]/[16px] tracking-[0.4px] font-normal">
        ----
      </p>
    </div>
  );
}

export default EmptyTeam;
