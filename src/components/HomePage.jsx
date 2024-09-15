
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/HomePage.css'; // Import the CSS file
import gtIcon from '../assets/gt.png'; // Import the Google Translate logo

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Fruit.AI</h1>
        <p>“Be Healthy!”</p>
      </header>
      <main>
        <div className="grid-container">
          <div className="grid-item item-chat">
            <Link to="/chat">Chat</Link>
          </div>
          <div className="grid-item item-color1">
            <Link to="/empty1">  </Link>
          </div>
          <div className="grid-item item-color1">
            <Link to="/empty1">  </Link>
          </div>
          <div className="grid-item item-g_translate">
            <Link to="/translator">
              <img src={gtIcon} alt="Google Translate" className="translate-logo" />
            </Link>
          </div>
          <div className="grid-item item-faqs">
            <Link to="/faqs">FAQs</Link>
          </div>
          <div className="grid-item item-about">
            <Link to="/about">About</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
