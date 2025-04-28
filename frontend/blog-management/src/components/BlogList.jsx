import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogList.css'; 

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole'); 

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blogs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Handle delete blog
  const handleDelete = async (blogId) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${blogId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  // Handle start editing a blog
  const handleEdit = (blogId, currentTitle, currentContent) => {
    setIsEditing(blogId);
    setNewTitle(currentTitle);
    setNewContent(currentContent);
  };

  // Handle saving the edited blog
  const handleSave = async (blogId) => {
    try {
      const updatedBlog = { title: newTitle, content: newContent };
      await axios.put(`http://localhost:5000/api/blogs/${blogId}`, updatedBlog, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(blogs.map(blog => blog.id === blogId ? { ...blog, title: newTitle, content: newContent } : blog));
      setIsEditing(null);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className='blogList-container'>
      <div className="container-head">
      <h2>All Blogs</h2>
      {userRole === 'admin' && (
        <button onClick={() => window.location.href = '/blogs/create'}>Create Blog</button>
      )}
      </div>
      <div className="container-body">
      <ul className="blog-list">
        {blogs.map((blog) => (
          <li key={blog.id} className="card">
            {isEditing === blog.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="New Title"
                />
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="New Content"
                ></textarea>
                <button onClick={() => handleSave(blog.id)}>Save</button>
                <button onClick={() => setIsEditing(null)}>Cancel</button>
              </div>
            ) : (
              <div className="card-content">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                {userRole === 'admin' && (
                  <div className="card-actions">
                    <button onClick={() => handleEdit(blog.id, blog.title, blog.content)}>Edit</button>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      </div>

      
    </div>
  );
};

export default BlogList;



