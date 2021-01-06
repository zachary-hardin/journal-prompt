import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchPrompt } from './services/PromptService';

function App() {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    retrievePrompt()
  }, []);

  const retrievePrompt = () => {
    fetchPrompt().then(response => {
      setPrompt(response.data);
    });
  }

  return (
    <div>
      <h1>Journal Prompt Project</h1>
      <p>{prompt.prompt}</p>

      <button data-testid={'refreshPrompt'} onClick={retrievePrompt}>Refresh Prompt</button>
    </div>
  );
}

export default App;
