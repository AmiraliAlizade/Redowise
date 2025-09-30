import calendar from "../../images/calendar.svg";
import messageCircle from "../../images/message-circle.svg";
import eImage from "../../images/5915634301788080553-r.png";
function Comment() {
  return (
    <div className="flex flex-col gap-[7px] w-full">
      <div className="flex items-center gap-1">
        <img src={messageCircle} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">Comment</p>
      </div>
      <div className="flex w-full ">
        <div className="w-[4px] bg-[#687372] rounded-l-[8px]"></div>

        <div className=" bg-white py-[10px] px-[12px] gap-[8px] flex flex-col justify-start w-full">
          <div className="flex justify-between w-full">
            <div className="flex gap-[6px] items-center ">
              <span
                className={`w-[20px] h-[20px] border border-solid border-white bg-center rounded-[4px] bg-no-repeat `}
                style={{
                  backgroundImage: `url(${eImage})`,
                  backgroundSize: "cover",
                }}
              ></span>
              <p className="text-[#7B61FF] text-[11px]/[16px] tracking-[0.5px] font-bold">
                Alireza Roodi
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img src={calendar} alt="" />
              <p className="text-[#687372] font-normal text-[10px]/[150%]">
                Sep 17, 4:29 PM
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-[#687372] font-normal text-[10px]/[150%]">
              Create a modern, responsive UI for [Feature name] that aligns with
              our brand guidelines and improves conversion for first-time users.
              Deliver hi-fi screens and a Figma prototype
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
