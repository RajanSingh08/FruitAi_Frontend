


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../style/FAQPage.css";

const FAQForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("question", question);
    formData.append("answer", answer);

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "https://fruitai-backend-8.onrender.com/faqs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFeedback(`FAQ Created: ${response.data.question}`);
      setQuestion("");
      setAnswer("");
      setImage(null);
      setTimeout(() => {
        navigate("/faqs"); // Navigate back to FAQ page after 1 second
      }, 1000);
    } catch (error) {
      setFeedback("Error creating FAQ");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="faq-form-container">
      <h2>Create New FAQ</h2>
      {feedback && <p>{feedback}</p>}
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image (Optional)</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create FAQ"}
        </button>
      </form>
    </div>
  );
};

export default FAQForm;
