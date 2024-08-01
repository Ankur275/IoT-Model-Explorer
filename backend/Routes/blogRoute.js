import express from "express"
import { upload } from "../middleware/multerMiddleware.js"
import { createBlogPost, getBlogPost, getBlogPosts, getUserBlogs, updateBlogPost } from "../controllers/bolgController.js"
import { verifyJWT} from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/createBlog").post(upload.single(
    "blogImage"
), verifyJWT,createBlogPost)

router.route("/list").get(verifyJWT, getBlogPosts)

router.route("/updateBlog/:id").put(upload.single("blogImage"), verifyJWT, updateBlogPost)
router.route("/getBlog/:id").get(verifyJWT , getBlogPost)
router.route("/getUserBlog").get(verifyJWT, getUserBlogs)
export default router;