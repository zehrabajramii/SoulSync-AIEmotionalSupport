import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome'; // Import Welcome component
import Home from './Home'; // Import Home component
import App from './App'; // Import App component
import PostEmotion from './PostEmotion'; // Import PostEmotion component
import Psychologists from './Psychologists'; // Import Psychologists component
import About from './About'; // Import About component

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Default route */}
        <Route path="/home" element={<Home />} /> {/* Home route */}
        <Route path="/soulsync-ai" element={<App />} /> {/* App route */}
        <Route path="/post-emotion" element={<PostEmotion />} /> {/* PostEmotion route */}
        <Route path="/psychologists" element={<Psychologists />} /> {/* Psychologists route */}
        <Route path="/about" element={<About />} /> {/* About route */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);