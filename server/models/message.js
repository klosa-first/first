/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const saltRounds = 10; // or another integer in that ballpark

const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    
    sender: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
    },
   
   
  },
  { timestamps: true }
);

// eslint-disable-next-line func-names
MessageSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});


const Message = mongoose.model('Message', MessageSchema);

export default Message;
