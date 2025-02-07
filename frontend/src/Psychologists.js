import React from "react";
import { useNavigate } from "react-router-dom";
import "./Psychologists.css";
import { FaPhone, FaStar } from "react-icons/fa";

// Import local images
import emilyImage from "./images/5.jpg";
import jamesImage from "./images/6.jpg";
import sarahImage from "./images/7.jpg";
import michaelImage from "./images/8.jpg";
import oliviaImage from "./images/9.jpg";

const psychologists = [
  {
    name: "Dr. Emily Carter",
    location: "New York, USA",
    price: "$100/hr",
    rating: "9.7",
    description: "Specializes in anxiety and stress management. Over 10 years of experience in clinical psychology.",
    pinColor: "#ff6b6b",
    image: emilyImage,
    phone: "+1 123 456 7890",
  },
  {
    name: "Dr. James Wilson",
    location: "London, UK",
    price: "$90/hr",
    rating: "9.3",
    description: "Expert in cognitive behavioral therapy. Published author and speaker on mental health.",
    pinColor: "#6bcf73",
    image: jamesImage,
    phone: "+44 123 456 7890",
  },
  {
    name: "Dr. Sarah Lee",
    location: "Toronto, Canada",
    price: "$110/hr",
    rating: "9.5",
    description: "Focuses on trauma and PTSD recovery. Certified in EMDR therapy.",
    pinColor: "#7f7fff",
    image: sarahImage,
    phone: "+1 234 567 8901",
  },
  {
    name: "Dr. Michael Brown",
    location: "Sydney, Australia",
    price: "$95/hr",
    rating: "9.2",
    description: "Specializes in relationship counseling. Offers couples therapy and family counseling.",
    pinColor: "#ffd93d",
    image: michaelImage,
    phone: "+61 123 456 789",
  },
  {
    name: "Dr. Olivia Green",
    location: "Berlin, Germany",
    price: "$85/hr",
    rating: "9.0",
    description: "Expert in child and adolescent psychology. Provides school-based counseling services.",
    pinColor: "#ffb480",
    image: oliviaImage,
    phone: "+49 123 456 789",
  },
];

const Psychologists = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* Navigation Bar */}
      <div className="navbar">
        <button className="navButton" onClick={() => navigate('/soulsync-ai')}>
          Soul Sync AI
        </button>
        <button className="navButton" onClick={() => navigate('/post-emotion')}>
          Post Emotion
        </button>
        <button className="navButton" onClick={() => navigate('/about')}>
          About
        </button>
      </div>

      {/* Page Content */}
      <div className="psychologists-container">
        <div className="psychologists-grid">
          {psychologists.map((psychologist, index) => (
            <div key={index} className="psychologist-card">
              <div className="pin" style={{ backgroundColor: psychologist.pinColor }}></div>
              <img src={psychologist.image} alt={psychologist.name} className="psychologist-image" />
              <h2 className="psychologist-name">{psychologist.name}</h2>
              <p className="psychologist-location">{psychologist.location}</p>
              <p className="psychologist-price">{psychologist.price}</p>
              <p className="psychologist-rating">
                Rating: {psychologist.rating} <FaStar className="star-icon" />
              </p>
              <p className="psychologist-description">{psychologist.description}</p>
              <button className="contact-button">
                <FaPhone className="phone-icon" /> {psychologist.phone}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Psychologists;
