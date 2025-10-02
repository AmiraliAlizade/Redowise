import ChatFooter from "../ui/ChatFooter";
import ChatNavbar from "../ui/ChatNavbar";
import SumTask from "../ui/Tasks/DraftSumTask";

import DraftTask from "../ui/Tasks/DraftTask";
import IncompleteTask from "../ui/Tasks/IncompleteTask";
import IncompleteSumTask from "../ui/Tasks/IncompleteSumTask";
import ActiveTask from "../ui/Tasks/ActiveTask";
import ActiveSumTask from "../ui/Tasks/ActiveSumTask";
import OutgoingMessage from "../ui/Messages/OutgoingMessage";

function ChatPage() {
  return (
    <div className="fixed inset-0 w-[100%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl  ">
      <div className="w-screen h-[100%] flex flex-col  pb-1 opacity-70">
        <ChatNavbar />
        <div className="w-full overflow-hidden py-18 ">
          <div className=" w-full h-full gap-[9px] justify-center items-center p-[20px] overflow-y-scroll min-h-0 ">
            {/* <DraftTask />
            <IncompleteTask />
            <IncompleteSumTask /> */}
            {/* <ActiveTask /> */}
            {/* <ActiveSumTask /> */}
            <OutgoingMessage />
            <DraftTask />
          </div>
        </div>
      </div>
      <ChatFooter />
    </div>
  );
}

export default ChatPage;
