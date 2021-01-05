import './App.css';
import React, { useState } from 'react';
import { fetchPrompt } from './services/PromptService';

function App() {
  const [prompt, setPrompt] = useState('');

  const getPrompt = () => {
    fetchPrompt().then((response) => {
      setPrompt(response.data);
    });
  }

  const promptExists = () => {
    if (prompt === '') {
      return <p>No Prompt. Try Again</p>
    } else {
      return <p>{prompt.prompt}</p>
    }
  }

  return (
    <div>
      <h1>Hello World 2!</h1>
      <button onClick={getPrompt}>Get Prompt</button>

      <br/>

      { promptExists() }
    </div>
  );
}

export default App;
