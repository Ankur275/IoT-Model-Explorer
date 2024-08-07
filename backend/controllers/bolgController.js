import {Blog} from '../Models/blog.js'
import { ApiError} from '../utils/apiError.js'
import { ApiResponse} from '../utils/apiResponse.js'
import { uploadOnCloudinary} from '../utils/cloudinary.js'
import { User} from '../Models/user.js'
import { asyncHandler } from '../utils/asyncHandler.js';
// Create a new blog post
export const createBlogPost = asyncHandler(async (req, res, next) => {
    const { title, content} = req.body;
    const author = req.user._id;
    console.log(`author${author}`);

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
        // throw new ApiError(500,error.message)
        next(error)
    }
});

// Get all blog posts with pagination and error handling
export const getBlogPosts = asyncHandler(async (req, res, next) => {
    const { page = 1, limit = 10 } = req.query; // Default to page 1, limit 10

    try {
        const blogs = await Blog.find()
            .populate('author', 'username email')
            .populate('comments.user', 'username email')
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 }); // Sort by createdAt in descending order
        // console.log(`blogs:${blogs}`);
        const total = await Blog.countDocuments();
        const totalPages = Math.ceil(total / limit);
        // console.log(`total:${total}`);
        // console.log(`totalPages:${totalPages}`);
    
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
        // throw new ApiError(500, error.message);
        next(error)
    }
    
});

// Get all blog posts created by a specific user
export const getUserBlogs = asyncHandler(async (req, res, next) => {
    const userId = req.user._id;
    console.log(userId);
    const { page = 1, limit = 10 } = req.query; // Default to page 1, limit 10

    try {
        const blogs = await Blog.find({ author: userId })
            .populate('author', 'username email')
            .populate('comments.user', 'username email')
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 }); // Sort by createdAt in descending order
        const total = await Blog.countDocuments({ author: userId });
        const totalPages = Math.ceil(total / limit);
        console.log(blogs);
    
        return res.status(200).json(new ApiResponse(200, { blogs, total, totalPages, currentPage: page }, "Fetched user blogs successfully"));
    } catch (error) {
        console.error('Error fetching user blogs:', error);
        // throw new ApiError(500, error.message);
        next(error)
    }
});

// Get a single blog post by ID
export const getBlogPost = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id)
            .populate('author', 'username email') // Populate author information
            .populate('comments.user', 'username email'); // Populate comment user information

        if (!blog) {
            // If no blog is found, return a 404 error
            // return res.status(404).json(new ApiResponse(404, {}, 'Blog not found'));
            throw new ApiError(404, 'Blog not found')
        }

        // Return the blog post with a 200 status
        return res.status(200).json(new ApiResponse(200, blog, 'Blog fetched successfully'));
    } catch (error) {
        // Log the error and return a 500 status
        console.error('Error fetching blog post:', error);
        // return res.status(500).json(new ApiResponse(500, null, error.message));
        // throw new ApiError(500, error.message)
        next(error)
    }
});

// Update a blog post by ID
export const updateBlogPost = asyncHandler(async (req, res,next) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            // return res.status(404).json({ message: 'Blog not found' });
            throw new ApiError(404,'Blog not found')
        }

        if (blog.author.toString() !== req.user._id.toString()) {
            // return res.status(403).json({ message: 'User not authorized to update this blog' });
            throw new ApiError(403,'User not authorized to update this blog');
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;

        if (req.file) {
            const imagePath = req.file.path;
            const image = await uploadOnCloudinary(imagePath);
            if (!image) {
                throw new ApiError(400, "Failed to upload image");
            }
            blog.image = image.url;
        }

        blog.updatedAt = Date.now();

        await blog.save();
        return res.status(200).json(new ApiResponse(200, blog, "Blog updated successfully"));
    } catch (error) {
        console.error('Error updating blog post:', error);
        // throw new ApiError(500, error.message);
        next(error)
    }
});
// Delete a blog post by ID
export const deleteBlogPost = asyncHandler(async (req, res,next) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            // return res.status(404).json({ message: 'Blog not found' });
            throw new ApiError(404,"Blog not found or Blog already deleted")
        }

        if (blog.author.toString() !== req.user._id.toString()) {
            // return res.status(403).json({ message: 'User not authorized to delete this blog' });
            throw new ApiError(403,'User not authorized to delete this blog')
        }

        await blog.deleteOne({_id:id});
        // res.status(200).json({ message: 'Blog deleted successfully' });
        return res.status(200).json(new ApiResponse(200,{},'Blog deleted successfully'))
    } catch (error) {
        console.error('Error deleting blog post:', error);
        // res.status(500).json({ message: error.message });
        // throw new ApiError(500, error.message)
        next(error)
    }
});


// Search for blog posts by keyword
export const search = asyncHandler(async (req, res, next) => {
    const { keyword, page = 1, limit = 10 } = req.query;

    if (!keyword) {
        return res.status(400).json(new ApiError(400, 'Keyword is required for searching'));
    }

    try {
        // Use MongoDB's text search to find blogs and users that match the keyword
        const blogSearchQuery = { $text: { $search: keyword } };
        const userSearchQuery = {
            $or: [
                { username: { $regex: keyword, $options: 'i' } },
                { email: { $regex: keyword, $options: 'i' } }
            ]
        };

        const blogs = await Blog.find(blogSearchQuery, 'title author')
            .populate('author', 'username')
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 });

        const users = await User.find(userSearchQuery, 'username')
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 });

        const totalBlogs = await Blog.countDocuments(blogSearchQuery);
        const totalUsers = await User.countDocuments(userSearchQuery);
        const totalPagesBlogs = Math.ceil(totalBlogs / limit);
        const totalPagesUsers = Math.ceil(totalUsers / limit);

        return res.status(200).json(new ApiResponse(200, {
            blogs: { data: blogs, total: totalBlogs, totalPages: totalPagesBlogs, currentPage: page },
            users: { data: users, total: totalUsers, totalPages: totalPagesUsers, currentPage: page }
        }, "Fetched search results successfully"));
    } catch (error) {
        console.error('Error searching blogs and users:', error);
        next(error);
    }
});


// Like a blog post
export const likeBlogPost = asyncHandler(async (req, res,next) => {
    const { id } = req.params;
    const userId = req.user._id;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            // return res.status(404).json({ message: 'Blog not found' });
            throw new ApiError(404, 'Blog not found')
        }

        if (blog.likes.includes(userId)) {
            // return res.status(400).json({ message: 'You have already liked this blog' });
            throw new ApiError(400, 'You have already liked this blog')
        }

        blog.likes.push(userId);
        blog.likeCount = blog.likes.length;
        await blog.save();

        // res.status(200).json({ message: 'Blog liked successfully', likeCount: blog.likeCount });
        return res.status(200).json(new ApiResponse(200,{likeCount: blog.likeCount},'Blog liked successfully'))
    } catch (error) {
        // console.error('Error liking blog post:', error);
        // res.status(500).json({ message: error.message });
        next(error)
    }
});

// Unlike a blog post
export const unlikeBlogPost = asyncHandler(async (req, res,next) => {
    const { id } = req.params;
    const userId = req.user._id;

    try {
        const blog = await Blog.findById(id);7
        if (!blog) {
            // return res.status(404).json({ message: 'Blog not found' });
            throw new ApiError(404, 'Blog not found')
        }

        if (!blog.likes.includes(userId)) {
            // return res.status(400).json({ message: 'You have not liked this blog' });
            throw new ApiError(400, 'You have not liked this blog')
        }

        blog.likes = blog.likes.filter(like => like.toString() !== userId.toString());
        blog.likeCount = blog.likes.length;
        await blog.save();

        // res.status(200).json({ message: 'Blog unliked successfully', likeCount: blog.likeCount });
        return res.status(200).json(new ApiResponse(200,{likeCount: blog.likeCount },'Blog unliked successfully'))
    } catch (error) {
        console.error('Error unliking blog post:', error);
        // res.status(500).json({ message: error.message });
        throw new ApiError(500, error.message);
    }
});