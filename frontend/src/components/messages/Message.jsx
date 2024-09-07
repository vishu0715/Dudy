import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const {authUser}  = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-violet-400" : "bg-sky-400";
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="normal user" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-violet-400`}>
           Hi! Bro how was your day?
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:30</div>
    </div>
  )
}

export default Message