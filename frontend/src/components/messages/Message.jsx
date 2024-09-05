const Message = () => {
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