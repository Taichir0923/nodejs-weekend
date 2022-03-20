const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    publishedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: "comments",
            required: true
        }
    ]
});

newsSchema.methods.addComment = function(commentId){
    this.comments.push(commentId)
}

module.exports = mongoose.model('news' , newsSchema);