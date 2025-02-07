require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.firestore();
const app = express();
const PORT = process.env.PORT || 5001;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Fetch all posts
app.get('/posts', async (req, res) => {
  try {
    const postsSnapshot = await db.collection('posts').orderBy('date', 'desc').get();
    const posts = [];
    postsSnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

// Add a new post
app.post('/posts', async (req, res) => {
  const { text, color, emoji, date } = req.body;

  if (!text || !date) {
    return res.status(400).json({ error: 'Text and date are required' });
  }

  try {
    const newPost = {
      text,
      color: color || '#f5f5f5',
      emoji: emoji || '📝',
      date,
    };

    const docRef = await db.collection('posts').add(newPost);
    res.json({ id: docRef.id, ...newPost });
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ error: 'Error adding post' });
  }
});

// Generate motivational text
app.post('/generate-motivation', async (req, res) => {
  const { text } = req.body;

  const emotionalKeywords = [
    'feel', 'sad', 'happy', 'angry', 'stressed', 'anxious', 'depressed',
    'lonely', 'upset', 'love', 'hope', 'confident', 'strong', 'motivated',
    'determined', 'heartbroken', 'grateful', 'excited', 'fearful', 'overwhelmed',
    'hopeless', 'courageous', 'worried', 'burned out', 'discouraged', 'peaceful',
    'fulfilled', 'inspired', 'empowered', 'frustrated', 'tired', 'lost', 'optimistic',
    'joyful', 'passionate', 'rejected', 'confused', 'hurt', 'valued', 'cheerful',
    'encouraged', 'proud', 'resilient', 'faith', 'purpose', 'dreams', 'determination',
    'ambitious', 'appreciated', 'uplifted', 'energized'
  ];
  const isEmotionalQuery = emotionalKeywords.some((keyword) => text.toLowerCase().includes(keyword));

  if (!isEmotionalQuery) {
    return res.json({ motivation: 'Please describe your emotions or how you feel to get emotional support.' });
  }

  try {
    const response = await axios.post(
      'https://api.cohere.ai/v1/generate',
      {
        model: 'command',
        prompt: `The user feels: ${text}. Generate a supportive and motivational text to help them.`,
        max_tokens: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ motivation: response.data.generations[0].text });
  } catch (error) {
    console.error('Error generating motivation:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error generating motivation' });
  }
});

// Start the server only if it's not in a test environment
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use. Please use a different port.`);
    } else {
      console.error('Server error:', err);
    }
  });
}

// Export app for testing
module.exports = app;
