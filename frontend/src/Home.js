import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button, Slider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Home.css";

/* Moods configuration */
const moods = [
  {
    label: <strong>Terrible</strong>, // ✅ Make label bold
    color: "#ff6b6b",
    emoji: "😡",
    quote: "Every storm runs out of rain.",
  },
  {
    label: <strong>Sad</strong>, // ✅ Make label bold
    color: "#ffb480",
    emoji: "😞",
    quote: "Tough times never last.",
  },
  {
    label: <strong>Neutral</strong>, // ✅ Make label bold
    color: "#ffd93d",
    emoji: "😐",
    quote: "Stay balanced. Life is a mix.",
  },
  {
    label: <strong>Happy</strong>, // ✅ Make label bold
    color: "#6bcf73",
    emoji: "😊",
    quote: "Happiness is within you.",
  },
  {
    label: <strong>Excellent</strong>, // ✅ Make label bold
    color: "#7f7fff",
    emoji: "😄",
    quote: "You are unstoppable!",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [moodIndex, setMoodIndex] = useState(2);

  // Dynamically change background from selected mood color → pastel purple
  useEffect(() => {
    document.body.style.background = `linear-gradient(135deg, ${moods[moodIndex].color} 0%, #d3caff 70%)`;

    // Cleanup function to reset the background color
    return () => {
      document.body.style.background = ""; // Reset to default background
    };
  }, [moodIndex]);

  return (
    <Container maxWidth="lg" className="home-container">
      {/* Title */}
      <Typography variant="h3" className="title" style={{ fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
        How do you feel today?
      </Typography>

      {/* Emoji with fancy ring behind it */}
      <Box className="emoji-wrapper">
        <Box
          className="emoji-ring"
          style={{ background: moods[moodIndex].color }}
        />
        <span className="emoji">{moods[moodIndex].emoji}</span>
      </Box>

      {/* Custom-styled slider */}
      <Slider
        value={moodIndex}
        min={0}
        max={4}
        step={1}
        marks
        onChange={(event, newValue) => setMoodIndex(newValue)}
        className="mood-slider"
      />

      {/* Mood label & quote in a fancy bubble */}
      <Box className="mood-bubble">
        <Typography className="mood-label">{moods[moodIndex].label}</Typography>
        <Typography className="mood-quote">{moods[moodIndex].quote}</Typography>
      </Box>

      {/* Continue Button */}
      <Button
        className="continue-button"
        onClick={() => navigate("/soulsync-ai")} // Navigate to /app (App.js)
        style={{
          color: "#FFFFFF", // ✅ Set text color to white
          borderRadius: "15px", // ✅ Increase border radius
          fontWeight: "bold", // ✅ Ensure the text stands out
        }}
      >
         Continue ➤ 
      </Button>
    </Container>
  );
};

export default Home;