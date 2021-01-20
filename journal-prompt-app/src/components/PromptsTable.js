import React, { useEffect, useState } from 'react';
import { fetchPrompts } from '../services/PromptService';


function PromptsTable() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetchPrompts().then(response => {
      setPrompts(response.data);
    });
  }, []);

  const loadRowsWithPrompts = () => {
    return prompts.map((prompt, index) => {
      return (
        <tr key={index}>
          <th scope="row">{prompt._id}</th>
          <td>{prompt.prompt}</td>
        </tr>
      );
    });
  }

  return (
    <>
      <h2>Prompts</h2>
      <table className={'table table-hover'}>
        <thead>
        <tr>
          <th scope={'col'}>ID</th>
          <th scope={'col'}>Prompt</th>
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