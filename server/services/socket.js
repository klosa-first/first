/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import socket from 'socket.io';


let io;
const socketSetter = {
  init(server) {
    io = socket(server);
    console.log('connected to socket');
    return io;
  },
  getIO() {
    if (!io) {
      throw new Error("Can't get io instance before calling .init()");
    }
    return io;
  }
};





export default socketSetter;
