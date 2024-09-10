import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"; // Import the correct model
import { getRecieverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // Check if a conversation between the sender and receiver exists
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // Create and save the new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        // Add the message ID to the conversation's message array
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // Save both conversation and message in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // Get the receiver's socket ID and emit the new message
        const recieverSocketId = getRecieverSocketId(receiverId);
        if (recieverSocketId) {
            io.to(recieverSocketId).emit("newMessage", newMessage); // Use req.io instead of io
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sending message:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getMessage = async (req, res) => {
   try{
      const {id:userToChatId}  = req.params;
      const senderId = req.user._id;
      
      const conversations = await Conversation.findOne({
         participants:{$all : [senderId, userToChatId]},
      }).populate("messages"); //for populating we get all the messages, instead of just reference.
     
      if(!conversations) return res.status(200).json([]);

      const messages = conversations.messages;
      res.status(200).json(messages);
   }
   catch(error){
      console.log("Error in getting message:", error.message);
      res.status(500).json({ error: "Internal server error" });
   }
};
