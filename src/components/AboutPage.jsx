import React from 'react';
import '../style/AboutPage.css'; // Make sure to create this CSS file

const AboutSection = () => {
  return (
    <div className="about-container">
      
      <h3 className="about-heading">Fruit.Ai</h3>
      <p className="about-description">
        Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
      </p>
      <button className="about-button">ABOUT</button>
    </div>
  );
};

export default AboutSection;
