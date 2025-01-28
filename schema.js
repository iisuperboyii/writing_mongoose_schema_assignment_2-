const mongoose = require('mongoose');

// Define the Comment Schema
const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  commentedAt: {
    type: Date,
    default: Date.now
  }
});

// Define the Blog Post Schema
const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    minlength: 5
  },
  content: {
    type: String,
    required: true,
    minlength: 50
  },
  author: {
    type: String
  },
  tags: {
    type: [String]
  },
  category: {
    type: String,
    default: "General"
  },
  likes: {
    type: [String]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  comments: [CommentSchema] // Embed comments as subdocuments
});

// Export the schemas
module.exports = {
  BlogPost: mongoose.model('BlogPost', BlogPostSchema),
  Comment: mongoose.model('Comment', CommentSchema)
};
