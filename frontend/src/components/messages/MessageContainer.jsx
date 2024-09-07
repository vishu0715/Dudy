import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import {TiMessages} from "react-icons/ti"
const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation}=useConversation();

  useEffect(() => {
      //cleanup function (unmounts)
      //if the user is logged out and again logged in he will see no conversation selected
      return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
    {!selectedConversation ? (<NoChatSelected/>) : (
        <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
             <span className="label-text">To:</span>{" "}
             <span className="text-gray-900 font-bold">{selectedConversation.name}</span>
            </div>
            <Messages/>
            <MessageInput/>
        </>
    )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () =>{
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>Welcome 🙏 Vishwak</p>
            <p>Select a chat to start your conversation</p>
            <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}