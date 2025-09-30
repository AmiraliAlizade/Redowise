import description from "../../images/textalign-justifycenter.svg";

function EmptyDescription() {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="flex items-center gap-1">
        <img src={description} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">
          Description
        </p>
      </div>
      <p className="text-[#1C1B1F] text-[12px]/[16px] tracking-[0.4px] font-normal">
        -----
      </p>
    </div>
  );
}

export default EmptyDescription;
