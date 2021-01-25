import React from 'react';
import { deletePrompt } from '../services/PromptService';

function PromptsTable(props) {
  const loadRowsWithPrompts = () => {
    return props.data.slice(0).reverse().map((prompt, index) => {
      return (
        <tr key={prompt._id} className={ index === 0 && props.isNewItem ? 'animate-new-row' : '' }>
          <td style={{ verticalAlign: 'middle' }}>{prompt.prompt}</td>
          <td style={{ verticalAlign: 'middle' }}>
            <button
              data-testid={`deletePromptBtn-${index}`}
              className={'btn'}
              onClick={() =>
                deletePrompt(prompt).then(() => {
                  props.setIsNewItem(false);
                  props.reloadData()
                })
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