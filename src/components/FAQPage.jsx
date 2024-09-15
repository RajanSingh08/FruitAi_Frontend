import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import "../style/FAQPage.css";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("https://fruitai-backend-8.onrender.com/faqs"); 
        setFaqs(response.data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ Section</h2>

      {faqs.map((faq) => (
        <div className="faq-item" key={faq.id}>
          {faq.image_url && (
            <img src={faq.image_url} alt={faq.question} className="faq-image" />
          )}
          <div className="faq-content">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        </div>
      ))}
      <div>
        <Link to="/create-faq">
          <button className="create-faq-button">Create New FAQ</button>
        </Link>
      </div>
    </div>
  );
};

export default FAQSection;
