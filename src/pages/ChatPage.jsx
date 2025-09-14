import ChatFooter from "../ui/ChatFooter";
import ChatNavbar from "../ui/ChatNavbar";

function ChatPage() {
  return (
    <div className="fixed inset-0 w-[100%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl overflow-hidden">
      <div className="w-screen h-screen  bg-[linear-gradient(330deg,#F79F00,#51C3B7)] reletive  pb-1 opacity-70 ">
        <ChatNavbar />
        <ChatFooter />
      </div>
    </div>
  );
}

export default ChatPage;
