/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const saltRounds = 10; // or another integer in that ballpark

const { Schema } = mongoose;

const chatSchema = new Schema(
  {
    
    sender: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      trim: true,
    },
    chatId: {
      type: String,
    },   
   
  },
  { timestamps: true }
);




const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
