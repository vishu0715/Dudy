import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

const userSocketMap = {}; // {user_id: socket_id}

// Function to get the receiver's socket ID
export const getRecieverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

// On new connection
io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    
    // Ensure the userId is valid (not undefined or empty)
    if (userId && userId !== "undefined") {
        // Store the userId with its corresponding socket ID
        userSocketMap[userId] = socket.id;
        
        // Emit the list of online users to all connected clients
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }

    // Handle user disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        
        // Find the userId associated with this socket and remove it from the map
        for (const [key, value] of Object.entries(userSocketMap)) {
            if (value === socket.id) {
                delete userSocketMap[key];
                break;
            }
        }

        // Emit the updated list of online users
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };
