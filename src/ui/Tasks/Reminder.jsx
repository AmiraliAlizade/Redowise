import notification from "../../images/notification-bing2.svg";

function Reminder() {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center gap-1">
        <img src={notification} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">
          Reminder
        </p>
      </div>
      <div className="flex gap-[5px] items-center bg-white py-1 px-[5px] rounded-[5px]">
        <p className="text-[#F59E0B] text-[12px]/[16px] tracking-[0.4px] font-normal">
          Soon
        </p>
        <p className="text-[#1C1B1F] text-[12px]/[16px] tracking-[0.4px] font-normal">
          Sep 17, 4:29 PM
        </p>
      </div>
    </div>
  );
}

export default Reminder;
