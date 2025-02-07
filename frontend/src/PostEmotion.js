import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Using axios for API calls
import './PostEmotion.css';
import { FaPaperPlane, FaQuoteLeft, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Navigation hook

// Define emojis related to SoulSync and emotions
const emotionEmojis = ["💜", "🧘‍♂️", "🔮", "💭", "🌿", "🕊"];

// Function to select a random emoji
const getRandomEmoji = () => {
  return emotionEmojis[Math.floor(Math.random() * emotionEmojis.length)];
};

const PostEmotion = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // Fetch posts from backend (Firebase or API)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/posts'); // Replace with your backend URL
        setPosts(response.data.reverse()); // Reverse order: Newest first
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Handle form submission
  const handleSubmit = async () => {
    if (postText.trim() === '') {
      alert('Please write something before submitting.');
      return;
    }

    const newPost = {
      text: postText,
      color: '#f5f5f5',
      emoji: getRandomEmoji(), // Assign random emoji
      date: new Date().toISOString().split('T')[0],
    };

    try {
      const response = await axios.post('http://localhost:5001/posts', newPost); // Post to backend
      setPosts([response.data, ...posts]); // Insert newest post at the beginning
      setPostText('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <div className="navbar">
        <button className="navButton" onClick={() => navigate('/soulsync-ai')}>
          Soul Sync AI
        </button>
        <button className="navButton" onClick={() => navigate('/psychologists')}>
         Psychologists
        </button>
        <button className="navButton" onClick={() => navigate('/about')}>
          About
        </button>
      </div>

      {/* Post Emotion Container */}
      <div className="post-emotion-container">
        {/* User Input (Top-Left) */}
        <div className="post-section">
          <textarea
            className="post-textarea"
            placeholder="Write about your emotional experience (2-3 lines)..."
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            maxLength={150}
          />
          <button className="submit-button" onClick={handleSubmit}>
            <FaPaperPlane className="submit-icon" /> <strong>Post</strong>
          </button>
        </div>

        {/* Posts Section (Newest First, Below Input) */}
        <div className="posts-wrapper">
          <div className="posts-container">
            {posts.map((post, index) => (
              <div key={index} className="post-card" style={{ backgroundColor: post.color }}>
                <div className="post-header">
                  <div className="profile-icon">
                    <FaUser />
                  </div>
                  <div className="post-date">{post.date}</div>
                  <FaQuoteLeft className="quote-icon" />
                </div>
                <p className="post-text">
                  {post.text} {post.emoji}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEmotion;
