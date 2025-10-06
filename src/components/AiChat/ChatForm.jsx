import microphon from "../../images/microphone.svg";
import attach from "../../images/attach-circle.svg";
import add from "../../images/add.svg";
import SendLogo from "../../ui/SendLogo";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createChat } from "../../services/apiAiChat";
import { useDispatch } from "react-redux";
import { setOutgoingMessage } from "../../redux/aiChatSlice";
function ChatForm() {
  const [recording, setRecording] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const { mutate: CreateChatMutation, isPending } = useMutation({
    mutationFn: createChat,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  function onSubmit(data) {
    dispatch(setOutgoingMessage(data.message));
    const chatMessage = {
      raw_content: data.message,
    };

    CreateChatMutation(chatMessage);
  }

  async function handleMicClick() {
    if (!recording) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        audioChunksRef.current = [];
        setAudioFile(audioBlob);
      };

      mediaRecorder.start();
      setRecording(true);
    } else {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute bottom-[0.30%]  flex justify-between py-[17px] px-[20px] bg-white w-full rounded-[14px] items-center"
    >
      <div className="flex items-center gap-[8px] w-full">
        <span>
          <img src={add} alt="" />
        </span>
        <div className="flex p-[16px] bg-[#F5FAF9] rounded-[14px] w-[90%] h-[54px]">
          <input
            {...register("message", { required: "Please write text for send" })}
            type="text"
            className="bg-none outline-none w-full"
            placeholder="Ask anything"
          />
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        {recording && (
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        )}
        <span className="cursor-pointer" onClick={handleMicClick}>
          <img src={microphon} alt="message" />
        </span>
        <span className="cursor-pointer">
          <img src={attach} alt="search" />
        </span>
        {audioFile && (
          <audio controls src={URL.createObjectURL(audioFile)}></audio>
        )}
        <button className="cursor-pointer">
          <SendLogo />
        </button>
      </div>
    </form>
  );
}

export default ChatForm;
