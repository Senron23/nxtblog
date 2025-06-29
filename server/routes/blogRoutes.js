import { Router } from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../controllers/blogController.js";
const blogRouter = Router();


blogRouter.get('/', getAllBlogs);

blogRouter.get('/:id', getBlogById);

blogRouter.post('/', createBlog);

blogRouter.put('/update/:id', updateBlog);

blogRouter.delete('/delete/:id', deleteBlog);

export default blogRouter;