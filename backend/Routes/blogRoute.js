import express from "express"
import { upload } from "../middleware/multerMiddleware.js"
import { createBlogPost } from "../controllers/bolgController.js"
import { verifyJWT} from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/createBlog").post(upload.single(
    "blogImage"
), verifyJWT,createBlogPost)

export default router;