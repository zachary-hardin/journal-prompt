import React, { useEffect, useState } from 'react';
import { fetchPrompt } from '../services/PromptService';
import '../styles/prompter-styles.css';
import '../styles/general.css';

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
      return (<p className={'center-text'}>"{prompt.prompt}"</p>);
    }
  }

  return (
    <div>
      <div className={'background-image-fullscreen'}>
        <div className={'center prompt-font-size dark-grey prompt-width'}>
          {promptLoaded()}

          <button
            className={'btn col-lg-2 col-md-3 col-sm-12 purple-btn float-right'}
            onClick={retrievePrompt}
          >refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prompter;