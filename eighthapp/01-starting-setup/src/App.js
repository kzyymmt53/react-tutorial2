import React, { useState } from 'react';
import BUTTON from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';



import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <BUTTON onClick={toggleParagraphHandler}>toggle paragraph</BUTTON>
    </div>
  );
}

export default App;
