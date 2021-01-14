import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchPrompt } from './services/PromptService';
import NavBar from './NavBar';

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
      return (<p>"{prompt.prompt}"</p>);
    }
  }

  return (

    <div>
      <NavBar />

      <div className={'container spacer-2'}>
        <h1>Prompt Generator</h1>
        <div style={{ height: '3rem' }}>
          {promptLoaded()}
        </div>

        <button
          className={'btn btn-primary'}
          data-testid={'refreshPrompt'}
          onClick={retrievePrompt}
        >Refresh Prompt</button>
      </div>
    </div>
  );
}

export default App;
