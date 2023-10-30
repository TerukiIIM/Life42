function createRoom() {
    let roomId = crypto.randomUUID();
    socket.emit('create', roomId);
    window.location.href = `${window.location.origin}/room/${roomId}`;
}