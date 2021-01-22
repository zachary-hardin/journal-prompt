import React from 'react';
import { deletePrompt } from '../services/PromptService';


function PromptsTable(props) {
  const loadRowsWithPrompts = () => {
    return props.data.map((prompt, index) => {
      return (
        <tr key={index}>
          <th scope="row">{prompt._id}</th>
          <td>{prompt.prompt}</td>
          <td>
            <button
              data-testid={`deletePromptBtn-${index}`}
              className={'btn'}
              onClick={() =>
                deletePrompt(prompt).then(() => props.reloadData())
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