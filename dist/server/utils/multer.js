'use strict';

/* eslint-disable max-len */
/* eslint-disable prefer-const */
var multer = require('multer');
var path = require('path');
// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: function fileFilter(req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png' && ext !== '.pdf' && ext !== '.doc' && ext !== '.docx') {
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  }
});