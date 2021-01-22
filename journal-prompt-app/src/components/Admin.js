import React, { useEffect, useState } from 'react';
import NewPromptForm from './NewPromptForm';
import PromptsTable from './PromptsTable';
import { fetchPrompts } from '../services/PromptService';

function Admin() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => loadPrompts(), []);

  const loadPrompts = () => {
    fetchPrompts().then(response => setPrompts(response.data));
  }

  return (
    <div className={'container spacer-2'}>
      <h1>Admin</h1>
      <br/>

      <NewPromptForm reloadData={loadPrompts}/>
      <br/>

      <PromptsTable data={prompts} reloadData={loadPrompts} />
    </div>
  );
}

export default Admin;