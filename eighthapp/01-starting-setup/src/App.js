import React, { useState } from 'react';
import BUTTON from './components/UI/Button/Button';



import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>this is paragraph</p>}
      <BUTTON onClick={toggleParagraphHandler}>toggle paragraph</BUTTON>
    </div>
  );
}

export default App;
