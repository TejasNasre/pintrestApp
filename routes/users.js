const mongoose = require('mongoose');

const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost:27017/pintrest');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  fullname : {
    type : String,
    required : true,
    unique : true
  }
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);