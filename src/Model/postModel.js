const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: String
    },
    article: {
        type: String
    },
    photo: {
        type: String
    },
    type: {
        type: String
    }
}, {timestamps: true})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post