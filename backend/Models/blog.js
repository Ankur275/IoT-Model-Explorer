import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        trim:true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    image: {
        type: String,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    likeCount: {
        type: Number,
        default: 0,
    },
    comments: [commentSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true
});

blogSchema.methods.like = function(userId) {
    if (!this.likes.includes(userId)) {
        this.likes.push(userId);
        this.likeCount = this.likes.length;
    }
    return this.save();
};

blogSchema.methods.unlike = function(userId) {
    this.likes = this.likes.filter(id => id.toString() !== userId.toString());
    this.likeCount = this.likes.length;
    return this.save();
};

export default mongoose.model('Blog', blogSchema);
