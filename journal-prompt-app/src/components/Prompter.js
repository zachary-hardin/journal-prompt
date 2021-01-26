import React, { useEffect, useState } from 'react';
import { fetchPrompt } from '../services/PromptService';

function Prompter() {
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
    <div className={'container spacer-2'}>
      <h1>Prompt Generator</h1>
      <div style={{ height: '4em' }}>
        {promptLoaded()}
      </div>

      <button
        className={'btn btn-primary col-lg-2 col-md-3 col-sm-12 mt-1'}
        onClick={retrievePrompt}
      >Refresh Prompt</button>
    </div>
  );
}

export default Prompter;