import { useSelector } from "react-redux";
import messagePart from "../../images/message-part.svg";

function OutgoingMessage() {
  const outGoingMessage = useSelector((state) => state.aiChat.outgoing_message);

  if (!outGoingMessage) {
    return null;
  }
  return (
    <div className="flex w-full justify-end mb-2">
      <div className="flex w-full flex-row-reverse gap-0 items-end ">
        <img src={messagePart} alt="" className="" />
        <div className="bg-[#A5EDEA] py-[12px] px-[16px] rounded-br-[4px] rounded-[16px] flex flex-col justify-center w-[25%] ">
          <span className="flex justify-center w-full ">
            <p className="text-[#1C1B1F] text-[14px]/[20px] font-normal">
              {outGoingMessage}
            </p>
          </span>
          <span className="flex justify-end w-full">
            <p className="text-[#1C1B1F] text-[12px]/[16px] tracking-[0.4px] font-normal">
              13:00
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default OutgoingMessage;
