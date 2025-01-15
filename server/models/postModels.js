const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  imgPath: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  format: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  liked: {
    type: Boolean,
    default: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likedUser : [{type : String , default : 0}]
});

const postModel = mongoose.model('Post', postSchema); //post is the name of the model and postSchema is the struccture . this mode will be Used to Do Curd Operation

module.exports = postModel;