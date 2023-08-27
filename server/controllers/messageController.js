
import { Server } from "socket.io";
import Message from "../models/message";
import Chat from '../models/chat';
import socketSetter from '../services/socket';

class messageController {
    /**
     * @description Defines the actions for the property endpoints
     * @class propertyController
     */

    static async chat() {
      console.log("I am here oo")
          try {
            const io = socketSetter.getIO();
            io.on('new_chat', async function(data){
              console.log('data', data)
              const chat_id = data.sender + data.receiver
              const chat = await Chat.findOne({ chatId: chat_id });
              if(chat){
                io.emit('new_chat', chat)
              }
              const chat_data = {
                sender: data.sender,
                receiver: data.receiver,
                chatId: data.sender + data.receiver
              }

              const newChat = await Chat.create(chat_data);

              io.emit('new_chat', newChat);
                
            })


            io.on('continue_chat', async function(data){
              const chat = await Chat.findOne({ chatId: data.chatId});

              if(!chat){
                io.emit('continue_chat', 'No chat available');
              }

              const message_ = {
                sender: data.sender,
                receiver: data.receiver,
                message: data.message,
                chat: chat.chatId
              }

              const message = await Message.create(message_);

              if(message) {
                const allMessages = await Message.find({ chatId: chat.chatId });

                io.emit('continue_chat', allMessages)
              } else {
                io.emit('continue_chat', message)
              }

            });

        }
        catch (error) {
      traceLogger(error);
      console.log(error)
    }

    }

}

export default messageController;