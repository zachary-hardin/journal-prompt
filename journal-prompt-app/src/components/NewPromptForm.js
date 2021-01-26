import React, { useState } from 'react';
import { insertPrompt } from '../services/PromptService';

function NewPromptForm(props) {
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
      props.setIsNewItem(true);
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
          <div className={'col-lg-11 col-md-12 col-sm-12 mt-1 mb-1'}>
            <input
              className={'form-control col-12'}
              type="text"
              placeholder={'Ex: What\'s your favorite outdoor activity?'}
              data-testid={'promptInput'}
              value={newPrompt}
              onChange={(event) => {
                setNewPrompt(event.target.value);
              }}
            />
          </div>

          <div className={'col-lg-1 col-md-12 col-sm-12 mt-1 mt-1'}>
            <button
              className={'btn btn-primary col-12'}
              type={'button'}
              data-testid={'addPromptBtn'}
              disabled={isInputBlank()}
              onClick={handleSubmit}
            >Add
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: '2rem'}}>
        {temporaryNotificationMessage()}
      </div>
    </form>
  );
}

export default NewPromptForm;