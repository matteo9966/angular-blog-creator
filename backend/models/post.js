const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    // title: String,
    _id: mongoose.Types.ObjectId, //Here it will be defince as type however, in Post method it will be used as function mongoose.Types.ObjectId(),
    title: { type: String, required: true },
    body: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    date: Date,
    comments: [String]
});

module.exports = mongoose.model('Post', PostSchema);