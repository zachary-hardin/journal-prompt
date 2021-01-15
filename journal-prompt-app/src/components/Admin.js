import React, { useState } from 'react';
import { insertPrompt } from '../services/PromptService';

function Admin() {
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

  const handleClick = () => {
    insertPrompt(newPrompt).then(response => {
        setAddPromptStatus(response.status);
        setNewPrompt('');
      }).catch(reason => setAddPromptStatus(reason.response.status))
  };

  const isInputBlank = () => {
    return newPrompt.trim() === '';
  }

  return (
    <div className={'container spacer-2'}>
      <h1>Admin</h1>

      <form>
        <div className={'form-group'}>
          <label>Enter a prompt</label>
          <div className={'form-row'}>
            <input
              className={'form-control col-md-10 mr-3'}
              type="text"
              placeholder={'Ex: What\'s your favorite outdoor activity?'}
              data-testid={'promptInput'}
              value={newPrompt}
              onChange={(event) => {
                setNewPrompt(event.target.value);
              }}
            />
            <button
              className={'btn btn-primary col-md-1'}
              type={'button'}
              data-testid={'addPromptBtn'}
              disabled={isInputBlank()}
              onClick={handleClick}
            >Add
            </button>
          </div>
        </div>
      </form>

      {temporaryNotificationMessage()}
    </div>
  );
}

export default Admin;