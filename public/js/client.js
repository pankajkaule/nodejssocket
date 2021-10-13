const socket = io("http://localhost:8000");

const name1 = prompt("enter your name to join");
socket.emit("new-user-joined", name1);
