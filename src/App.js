import React, { useState } from 'react';
import './App.css';

function App() {
  const compliments = [
    "You are sunshine in human form ☀️",
    "You’re doing amazing sweetie 💖",
    "You make the world brighter 🌈",
    "You’re a star ✨",
    "You’re loved more than you know 💕"
  ];

  const [index, setIndex] = useState(0);

  function showNextCompliment() {
    setIndex((index + 1) % compliments.length);
  }

  return (
    <div className="App">
      <h1>{compliments[index]}</h1>
      <button onClick={showNextCompliment}>Give me more smiles 💌</button>
      <div classname="watermark">Vishnupriya👾</div>
    </div>
  );
  
}

export default App;
