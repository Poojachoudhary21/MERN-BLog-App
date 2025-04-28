import React, { useState } from 'react';
import axios from 'axios';
import './BlogForm.css'; 

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState(''); // State for success or error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Get token from localStorage

    try {
      const response = await axios.post(
        'http://localhost:5000/api/blogs/create',
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token here
          },
        }
      );
      console.log('Blog created:', response.data);
      setMessage('Blog created successfully!'); // Success message
      setTitle(''); // Reset the form
      setContent('');
    } catch (error) {
      console.error('Error creating blog:', error.response?.data || error.message);
      setMessage('Error creating blog. Please try again.'); // Error message
    }
  };

  return (
    <div className="blogform-container">
      <div className="form-container">
        <h1>Create Blog</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <br />
          <button type="submit">Create Blog</button>
        </form>
        {message && <p className="message">{message}</p>} {/* Display the message */}
      </div>
    </div>
  );
};

export default BlogForm;
