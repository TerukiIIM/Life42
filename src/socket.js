const socket = io();

socket.on("connect", () => socket.emit("hello", `Hi there! I am ${window.navigator.userAgent}`));