const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require('path') // Check The File Path of Any file like .pdf||.jpeg

// console.log(path.extname("hello.jpeg"))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    const uniquename = uuidv4();
    cb(null, uniquename+path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
