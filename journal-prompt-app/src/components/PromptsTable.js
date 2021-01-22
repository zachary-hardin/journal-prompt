import React, { useEffect, useState } from 'react';
import { deletePrompt, fetchPrompts } from '../services/PromptService';


function PromptsTable() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => loadPrompts(), []);

  const loadPrompts = () => {
    fetchPrompts().then(response => setPrompts(response.data));
  }

  const loadRowsWithPrompts = () => {
    return prompts.map((prompt, index) => {
      return (
        <tr key={index}>
          <th scope="row">{prompt._id}</th>
          <td>{prompt.prompt}</td>
          <td>
            <button
              data-testid={`deletePromptBtn-${index}`}
              className={'btn'}
              onClick={() =>
                deletePrompt(prompt).then(() => loadPrompts())
              }
            >
              <span className={'fa fa-trash'} style={{ color: '#C70000' }}/>
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <h2>Prompts</h2>
      <table className={'table'}>
        <thead>
        <tr>
          <th scope={'col'}>ID</th>
          <th scope={'col'}>Prompt</th>
          <th scope={'col'}/>
        </tr>
        </thead>
        <tbody>
        {loadRowsWithPrompts()}
        </tbody>
      </table>
    </>
  )
}

export default PromptsTable;