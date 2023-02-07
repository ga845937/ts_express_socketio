import { Server } from "socket.io";

const taskQueue = {};
export const indexWS = function (io: Server) {
    io.on("connection", (socket) => {
        taskQueue[socket.id] = {};

        socket.on("hello", async (req) => {
            console.log(req);
            socket.emit("world", "EJSTest");
        });
    });
};
