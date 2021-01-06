import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchPrompt } from './services/PromptService';

function App() {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    fetchPrompt().then(response => {
      setPrompt(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Journal Prompt Project</h1>
      <p>{prompt.prompt}</p>
    </div>
  );
}

export default App;
