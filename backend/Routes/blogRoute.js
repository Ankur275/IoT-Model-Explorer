import express from "express"
import { upload } from "../middleware/multerMiddleware.js"
import { createBlogPost, deleteBlogPost, getBlogPost, getBlogPosts, getUserBlogs, likeBlogPost, unlikeBlogPost, updateBlogPost } from "../controllers/bolgController.js"
import { verifyJWT} from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/createBlog").post(upload.single(
    "blogImage"
), verifyJWT,createBlogPost)

router.route("/list").get(verifyJWT, getBlogPosts)

router.route("/updateBlog/:id").put(upload.single("blogImage"), pdateBlogPost)
router.route("/getBlog/:id").get(getBlogPost)
router.route("/getUserBlog").get( getUserBlogs)
router.route("/deleteBlog/:id").delete( deleteBlogPost)
router.route("/likeBlog/:id").post( likeBlogPost)
router.route("/unlikeBlog/:id").post(unlikeBlogPost) 
export default router;