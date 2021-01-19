import React, { useState } from 'react';
import { insertPrompt } from '../services/PromptService';

function NewPromptForm() {
  const [newPrompt, setNewPrompt] = useState('');
  const [addPromptStatus, setAddPromptStatus] = useState(200);

  const temporaryNotificationMessage = () => {
    if (addPromptStatus === 201) {
      return (
        <p>New Prompt Added</p>
      );
    } else if (addPromptStatus === 409) {
      return (
        <p>Failed to Add New Prompt</p>
      );
    }
  };

  const handleSubmit = () => {
    insertPrompt(newPrompt).then(response => {
      setAddPromptStatus(response.status);
      setNewPrompt('');
    }).catch(reason => setAddPromptStatus(reason.response.status))
  };

  const isInputBlank = () => {
    return newPrompt.trim() === '';
  };

  const handleOnEnter = (event) => {
    const isEnterKey = event.key === 'Enter';

    if (isEnterKey && !isInputBlank()) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onKeyPress={(e) => handleOnEnter(e)}>
      <div className={'form-group'}>
        <label>Enter a prompt</label>
        <div className={'form-row'}>
          <input
            className={'form-control col-md-10 col-sm-12 m-1'}
            type="text"
            placeholder={'Ex: What\'s your favorite outdoor activity?'}
            data-testid={'promptInput'}
            value={newPrompt}
            onChange={(event) => {
              setNewPrompt(event.target.value);
            }}
          />
          <button
            className={'btn btn-primary col-md-1 col-sm-12 m-1'}
            type={'button'}
            data-testid={'addPromptBtn'}
            disabled={isInputBlank()}
            onClick={handleSubmit}
          >Add
          </button>
        </div>
      </div>
      {temporaryNotificationMessage()}
    </form>
  );
}

export default NewPromptForm;