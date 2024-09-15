import React, { useState } from "react";
import "../style/TranslatorPage.css"


import axios from "axios";

const TranslationApp = () => {
  const [text, setText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    try {
      const response = await axios.post("https://fruitai-backend-8.onrender.com/translate", {
        text,
        source_lang: sourceLang,
        target_lang: targetLang,
      });
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error("Error during translation:", error);
    }
  };

  return (
    <div className="translation-app">
      <h2>Language Translator</h2>

      <div className="form-group">
        <label htmlFor="text">Text to Translate</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value) }
          rows="4"
          cols="50"
          placeholder="Enter text here..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="sourceLang">Source Language</label>
        <select
          id="sourceLang"
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh-cn">Chinese (Simplified)</option>
          {/* Add more language options here */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="targetLang">Target Language</label>
        <select
          id="targetLang"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh-cn">Chinese (Simplified)</option>
          {/* Add more language options here */}
        </select>
      </div>

      <button onClick={handleTranslate}>Translate</button>

      {translatedText && (
        <div className="translated-text">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslationApp;