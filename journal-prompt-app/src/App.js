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

  const promptLoaded = () => {
    if (prompt.prompt) {
      return (<p>{prompt.prompt}</p>);
    }
  }

  return (
    <div className={'container'}>
      <h1>Journal Prompt Project</h1>

      <div style={{ height: '5rem' }}>
        {promptLoaded()}
      </div>

      <button
        className={'btn btn-primary'}
        data-testid={'refreshPrompt'}
        onClick={retrievePrompt}
      >Refresh Prompt</button>
    </div>
  );
}

export default App;
