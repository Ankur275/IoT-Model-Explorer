import { Console, log } from 'console';
import {Blog} from '../Models/blog.js'
import { ApiError} from '../utils/apiError.js'
import { ApiResponse} from '../utils/apiResponse.js'
import { uploadOnCloudinary} from '../utils/cloudinary.js'
// Create a new blog post
export const createBlogPost = async (req, res) => {
    const { title, content} = req.body;
    const author = req.user._id;

    const imagePath = req.file ? req.file.path : null;
    // console.log(imagePath);
    if(!imagePath){
        throw new ApiError(400, "Image not found")
    }

    try {
        const image = await uploadOnCloudinary(imagePath)
        if(!image){
            throw new ApiError(400, "Failed to upload image")
        }
        const newBlog = new Blog({ title, content, image:image?.url || "", author }) ;
        await newBlog.save();
        // res.status(201).json(newBlog);
        return res.status(201).json( new ApiResponse(200, newBlog, "Blog created successfully"))
    } catch (error) {
        console.error('Error creating blog post:', error);
        // res.status(500).json({ message: error.message });
        throw new ApiError(500,error.message)
    }
};

// Get all blog posts with pagination and error handling
export const getBlogPosts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Default to page 1, limit 10

    try {
        const blogs = await Blog.find()
            .populate('author', 'username email')
            .populate('comments.user', 'username email')
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 }); // Sort by createdAt in descending order
        console.log(`blogs:${blogs}`);
        const total = await Blog.countDocuments();
        const totalPages = Math.ceil(total / limit);
        console.log(`total:${total}`);
        console.log(`totalPages:${totalPages}`);
    
        // Format blogs to include all required fields
        // const formattedBlogs = blogs.map(blog => ({
        //     id: blog._id,
        //     author: blog.author,
        //     title: blog.title,
        //     content: blog.content,
        //     comments: blog.comments,
        //     likeCount: blog.likeCount,
        //     createdAt: blog.createdAt,
        //     updatedAt: blog.updatedAt,
        //     image: blog.image
        // }));
        // console.log(`Fromattedblogs:\n${formattedBlogs}`);
    
        return res.status(200).json(new ApiResponse(200, { blogs, total, totalPages, currentPage: page }, "Fetched blog posts successfully"));
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw new ApiError(500, error.message);
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