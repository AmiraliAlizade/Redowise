import microphon from "../images/microphone.svg";
import attach from "../images/attach-circle.svg";
import add from "../images/add.svg";
import SendLogo from "./SendLogo";
function ChatFooter() {
  return (
    <footer className="absolute bottom-[0.30%]  flex justify-between py-[17px] px-[20px] bg-white w-full rounded-[14px] items-center">
      <div className="flex items-center gap-[8px] w-full">
        <span>
          <img src={add} alt="" />
        </span>
        <div className="flex p-[16px] bg-[#F5FAF9] rounded-[14px] w-[90%] h-[54px]">
          <input
            type="text"
            className="bg-none outline-none w-full"
            placeholder="Ask anything"
          />
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <span className="cursor-pointer">
          <img src={microphon} alt="message" />
        </span>
        <span className="cursor-pointer">
          <img src={attach} alt="search" />
        </span>
        <SendLogo />
      </div>
    </footer>
  );
}

export default ChatFooter;
