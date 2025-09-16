import search from "../images/search-normal.svg";
import menu from "../images/menu.svg";
import addMessage from "../images/message-add.svg";
import AppLogoOne from "./AppLogoOne";

function ChatNavbar() {
  return (
    <nav className="absolute top-[0%]  flex justify-between py-[17px] px-[20px] bg-white w-full rounded-b-[14px] items-center">
      <div className="flex items-center gap-[16px]">
        <span className="cursor-pointer">
          <img src={menu} alt="" />
        </span>
        <div className="flex items-center gap-[12px]">
          <span className="reletive rounded-full w-[50px] h-[52px] bg-[#006a621a] flex  items-center justify-center">
            <AppLogoOne size={32} />
          </span>
          <div className="flex flex-col items-start justify-center gap[5px] ">
            <h1 className="font-bold font-inter text-[#121F1D] text-[14px]  ">
              REDO-WISE
            </h1>
            <div className="flex gap-[2px] items-center">
              <span className="rounded-full bg-[#006a621a] w-[6px] h-[6px] "></span>
              <h1 className="font-normal font-inter text-[#006A62] text-[14px] ">
                Online
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <span className="cursor-pointer">
          <img src={addMessage} alt="message" />
        </span>
        <span className="cursor-pointer">
          <img src={search} alt="search" />
        </span>
      </div>
    </nav>
  );
}

export default ChatNavbar;
