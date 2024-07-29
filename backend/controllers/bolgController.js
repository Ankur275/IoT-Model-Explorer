import {Blog} from '../Models/blog.js'

// Create a new blog post
export const createBlogPost = async (req, res) => {
    const { title, content, image } = req.body;
    const author = req.user._id;

    try {
        const newBlog = new Blog({ title, content, image, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ message: error.message });
    }
};

// Get all blog posts
export const getBlogPosts = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username email').populate('comments.user', 'username email');
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ message: error.message });
    }
};

// Get a single blog post by ID
export const getBlogPost = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id).populate('author', 'username email').populate('comments.user', 'username email');
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).json({ message: error.message });
    }
};

// Update a blog post by ID
export const updateBlogPost = async (req, res) => {
    const { id } = req.params;
    const { title, content, image } = req.body;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'User not authorized to update this blog' });
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.image = image || blog.image;
        blog.updatedAt = Date.now();

        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error updating blog post:', error);
        res.status(500).json({ message: error.message });
    }
};

// Delete a blog post by ID
export const deleteBlogPost = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'User not authorized to delete this blog' });
        }

        await blog.remove();
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog post:', error);
        res.status(500).json({ message: error.message });
    }
};

// Like a blog post
export const likeBlogPost = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        if (blog.likes.includes(userId)) {
            return res.status(400).json({ message: 'You have already liked this blog' });
        }

        blog.likes.push(userId);
        blog.likeCount = blog.likes.length;
        await blog.save();

        res.status(200).json({ message: 'Blog liked successfully', likeCount: blog.likeCount });
    } catch (error) {
        console.error('Error liking blog post:', error);
        res.status(500).json({ message: error.message });
    }
};

// Unlike a blog post
export const unlikeBlogPost = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        if (!blog.likes.includes(userId)) {
            return res.status(400).json({ message: 'You have not liked this blog' });
        }

        blog.likes = blog.likes.filter(like => like.toString() !== userId.toString());
        blog.likeCount = blog.likes.length;
        await blog.save();

        res.status(200).json({ message: 'Blog unliked successfully', likeCount: blog.likeCount });
    } catch (error) {
        console.error('Error unliking blog post:', error);
        res.status(500).json({ message: error.message });
    }
};