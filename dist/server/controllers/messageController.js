"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _socket = require("socket.io");

var _message = require("../models/message");

var _message2 = _interopRequireDefault(_message);

var _chat = require("../models/chat");

var _chat2 = _interopRequireDefault(_chat);

var _socket2 = require("../services/socket");

var _socket3 = _interopRequireDefault(_socket2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageController = function () {
  function messageController() {
    (0, _classCallCheck3.default)(this, messageController);
  }

  (0, _createClass3.default)(messageController, null, [{
    key: "chat",

    /**
     * @description Defines the actions for the property endpoints
     * @class propertyController
     */

    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var io;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("I am here oo");
                try {
                  io = _socket3.default.getIO();

                  io.on('new_chat', function () {
                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
                      var chat_id, chat, chat_data, newChat;
                      return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              console.log('data', data);
                              chat_id = data.sender + data.receiver;
                              _context.next = 4;
                              return _chat2.default.findOne({ chatId: chat_id });

                            case 4:
                              chat = _context.sent;

                              if (chat) {
                                io.emit('new_chat', chat);
                              }
                              chat_data = {
                                sender: data.sender,
                                receiver: data.receiver,
                                chatId: data.sender + data.receiver
                              };
                              _context.next = 9;
                              return _chat2.default.create(chat_data);

                            case 9:
                              newChat = _context.sent;


                              io.emit('new_chat', newChat);

                            case 11:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));

                    return function (_x) {
                      return _ref2.apply(this, arguments);
                    };
                  }());

                  io.on('continue_chat', function () {
                    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data) {
                      var chat, message_, message, allMessages;
                      return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return _chat2.default.findOne({ chatId: data.chatId });

                            case 2:
                              chat = _context2.sent;


                              if (!chat) {
                                io.emit('continue_chat', 'No chat available');
                              }

                              message_ = {
                                sender: data.sender,
                                receiver: data.receiver,
                                message: data.message,
                                chat: chat.chatId
                              };
                              _context2.next = 7;
                              return _message2.default.create(message_);

                            case 7:
                              message = _context2.sent;

                              if (!message) {
                                _context2.next = 15;
                                break;
                              }

                              _context2.next = 11;
                              return _message2.default.find({ chatId: chat.chatId });

                            case 11:
                              allMessages = _context2.sent;


                              io.emit('continue_chat', allMessages);
                              _context2.next = 16;
                              break;

                            case 15:
                              io.emit('continue_chat', message);

                            case 16:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, this);
                    }));

                    return function (_x2) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                } catch (error) {
                  traceLogger(error);
                  console.log(error);
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function chat() {
        return _ref.apply(this, arguments);
      }

      return chat;
    }()
  }]);
  return messageController;
}();

exports.default = messageController;