import express from 'express';
import { createBlog, getAllBlogs } from '../controllers/blogController.js';
import { authenticate, authorizeRoles} from '../middleware/authMiddleware.js';
import { deleteBlog, editBlog } from '../controllers/blogController.js';

const router = express.Router();

router.post('/create', authenticate, authorizeRoles('admin'), createBlog);
router.get('/', authenticate, getAllBlogs);
// Route to edit an existing blog
router.put('/:id', authenticate, authorizeRoles('admin'), editBlog);

// Route to delete a blog
router.delete('/:id', authenticate, authorizeRoles('admin'), deleteBlog);


export default router;

