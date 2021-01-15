import React, { useState } from 'react';
import { insertPrompt } from '../services/PromptService';

function Admin() {
  const [newPrompt, setNewPrompt] = useState('');
  const [addPromptStatus, setAddPromptStatus] = useState(200);

  const notification = () => {
    if (addPromptStatus === 201) {
      return (
        <p style={{ color: 'green' }}>New Prompt Added</p>
      );
    } else if (addPromptStatus === 409) {
      return (
        <p style={{ color: 'red' }}>Failed to Add New Prompt</p>
      );
    }
  };

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
              disabled={newPrompt.trim() === ''}
              onClick={() => {
                insertPrompt(newPrompt)
                  .then(response => {
                    setAddPromptStatus(response.status);
                    setNewPrompt('');
                  })
                  .catch((reason) => {
                    setAddPromptStatus(reason.response.status);
                  })
              }}
            >Add
            </button>
          </div>
        </div>
      </form>

      {notification()}
    </div>
  );
}

export default Admin;