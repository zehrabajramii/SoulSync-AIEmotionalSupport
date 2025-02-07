import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Welcome.css";

const quotes = [
  "Believe in yourself and all that you are.",
  "Happiness depends upon ourselves.",
  "Your limitation—it's only your imagination.",
  "Do what you can, with what you have, where you are.",
  "Success is the courage to continue that counts.",
  "Your mind is a powerful thing. Fill it with positive thoughts.",
  "Every moment is a fresh beginning.",
  "Small steps every day lead to big success.",
  "Your past does not define your future.",
  "Everything you need is already inside you.",
  "Embrace the journey, not just the destination.",
  "Progress, not perfection, is the key to success.",
  "Your only limit is your mindset.",
  "You are stronger than you think.",
  "Keep going; everything you need will come to you at the right time.",
];

const Welcome = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [quotePositions, setQuotePositions] = useState([]);

  useEffect(() => {
    const positions = quotes.map(() => ({
      x: Math.random() * window.innerWidth * 0.6 - window.innerWidth / 4,
      y: Math.random() * window.innerHeight * 0.6 - window.innerHeight / 4,
      opacity: Math.random() * 0.4 + 0.6,
    }));
    setQuotePositions(positions);
  }, []);

  return (
    <Container maxWidth="md" className="welcome-container">
      <Box className="floating-quotes-container">
        {quotes.map((quote, index) => (
          <Typography
            key={index}
            className="floating-quote"
            style={{
              transform: `translate(${quotePositions[index]?.x}px, ${quotePositions[index]?.y}px)`,
              opacity: quotePositions[index]?.opacity,
            }}
          >
            {quote}
          </Typography>
        ))}
      </Box>

      <Box className="welcome-box">
        <Typography variant="h3" className="title">
          Welcome to <span className="highlight">SoulSync</span>
        </Typography>
        <Typography className="subtitle">
          Personalized AI for Emotional Coaching & Growth
        </Typography>
        <Button
          variant="contained"
          className="fancy-button"
          onClick={() => navigate("/home")} // Navigate to /home (Home.js)
           style={{
            color: "#FFFFFF", // ✅ Set text color to white
            borderRadius: "15px", // ✅ Increase border radius
            fontWeight: "bold", // ✅ Ensure the text stands out
            marginTop: "10px",
         }}
        >
          GET STARTED 
        </Button>
      </Box>
    </Container>
  );
};

export default Welcome;