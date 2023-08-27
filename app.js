import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import helmet from "helmet";
import { notFound, errorHandler } from './server/middlewares/errorhandlers';
import routes from './server/routes';
import config from './server/config/index';
import traceLogger from './server/logger/tracelogger';
import socketSetter from './server/services/socket';
import messageController from './server/controllers/messageController';

const {
  chat
} = messageController;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use(logger('dev'))


// connect to mongodb
// eslint-disable-next-line max-len
const mongoURL = config.MONGODB_DATABASE;



mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected!');
  })
  .catch(err => console.log(err));


  app.get('/',  (req, res) => {

    res.json({ massage: 'Welcome to Klosa Api' });
  });

  // "start": "node  ./dist/index.js",
  // Routes
app.use('/api', routes);

app.use('*', notFound);
app.use(errorHandler);

process.on('unhandledRejection', (reason) => {
  traceLogger(reason);
});

process.on('uncaughtException', (reason) => {
  traceLogger(reason);
});

const PORT = process.env.PORT || 5678;
const server = app.listen(PORT, () => {
  process.stdout.write(`app is listening on port ${PORT}`);
});

// initialize your local socket.io module
// socketSetter.init(server);

// const io = socketSetter.getIO();


// io.on('connection', socket => {
//   // console.log('client is connected')
//   console.log('CONNectedc');
//   // console.log(socket.handshake.query['token']);
//   chat();
// })

export default app;