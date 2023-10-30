import { v4 as uuidv4 } from 'uuid';

module.exports = (io, socket) => {
    const createRoom = () => {
        let roomId = uuidv4();
        socket.join(roomId);
        return roomId;
    }

    const joinRoom = (io, socket) => {
        
    }

    socket.on("room:create", createRoom);
    socket.on("room:join", joinRoom);
}