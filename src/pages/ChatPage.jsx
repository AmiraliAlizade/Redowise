import ChatFooter from "../ui/ChatFooter";
import ChatNavbar from "../ui/ChatNavbar";
import SumTask from "../ui/Tasks/SumTask";
import Task from "../ui/Tasks/Task";

function ChatPage() {
  return (
    <div className="fixed inset-0 w-[100%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl overflow-hidden">
      <div className="w-screen h-screen absolute  pb-1 opacity-70 ">
        <ChatNavbar />
        <div className="absolute top-[20%] w-full flex flex-col justify-center items-center p-[20px]">
          {/* <SumTask /> */}
          <Task />
        </div>
        <ChatFooter />
      </div>
    </div>
  );
}

export default ChatPage;
