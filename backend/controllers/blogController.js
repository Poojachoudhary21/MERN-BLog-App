import Blog from '../models/blogModel.js';

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const blog = await Blog.create({
      title,
      content,
      authorId: req.user.userId,
    });

    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};


// Delete blog
export const deleteBlog = async (req, res) => {
    try {
      const { id } = req.params; // Get the blog ID from the URL parameters
  
      // Find the blog by ID
      const blog = await Blog.findByPk(id);
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      // Destroy the blog
      await blog.destroy();
  
      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting blog', error });
    }
  };
  


  // Edit blog
export const editBlog = async (req, res) => {
    try {
      const { id } = req.params;  // Get the blog ID from the URL parameters
      const { title, content } = req.body;  // Get the title and content from the request body
  
      // Find the blog by ID
      const blog = await Blog.findByPk(id);
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      // Update the blog's title and content
      blog.title = title || blog.title;  // If title is provided, update it, otherwise keep the old title
      blog.content = content || blog.content;  // If content is provided, update it, otherwise keep the old content
  
      // Save the updated blog
      await blog.save();
  
      res.status(200).json({ message: 'Blog updated successfully', blog });
    } catch (error) {
      res.status(500).json({ message: 'Error updating blog', error });
    }
  };