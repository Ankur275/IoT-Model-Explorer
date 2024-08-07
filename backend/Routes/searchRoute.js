import express from "express"
import { verifyJWT} from "../middleware/authMiddleware.js"
import { search } from "../controllers/bolgController.js"

const router = express.Router()

router.route("/search").get(verifyJWT,search)


export default router