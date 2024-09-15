import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import ChatbotPage from "./components/ChatbotPage";
import TranslatorPage from "./components/TranslatorPage";
import FAQPage from "./components/FAQPage";
import AboutPage from "./components/AboutPage";
import FAQForm from "./components/CreateFAQ";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatbotPage />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create-faq" element={<FAQForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
