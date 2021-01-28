import React, { useEffect } from 'react';
import { deletePrompt } from '../services/PromptService';
import '../styles/general.css';

function PromptsTable(props) {
  useEffect(() => {
    if (props.isNewItem) {
      props.reloadData();
    }
  });

  const verticalMiddle = {
    verticalAlign: 'middle'
  };

  const isFirstRowNew = (index) => {
    return index === 0 && props.isNewItem;
  };

  const loadRowsWithPrompts = () => {
    return props.data.slice(0).reverse().map((prompt, index) => {
      return (
        <tr key={prompt._id} className={ isFirstRowNew(index) ? 'animate-new-row' : '' }>
          <td style={verticalMiddle}>{prompt.prompt}</td>
          <td style={verticalMiddle}>
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
              <span className={'fa fa-trash'} style={{ color: '#FD2F98' }}/>
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <table className={'table'}>
        <thead>
        <tr>
          <th scope={'col'}>Prompts</th>
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