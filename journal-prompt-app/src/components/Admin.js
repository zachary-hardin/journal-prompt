import React, { useEffect, useState } from 'react';
import NewPromptForm from './NewPromptForm';
import PromptsTable from './PromptsTable';
import { fetchPrompts } from '../services/PromptService';
import '../styles/general.css'

function Admin() {
  const [prompts, setPrompts] = useState([]);
  const [isNewItem, setIsNewItem] = useState(false);

  useEffect(() => loadPrompts(), []);

  const loadPrompts = () => {
    fetchPrompts().then(response => setPrompts(response.data));
  }

  return (
    <div className={'container spacer-2 '}>
      <NewPromptForm setIsNewItem={setIsNewItem}/>
      <br/>
      <PromptsTable data={prompts} reloadData={loadPrompts} isNewItem={isNewItem} setIsNewItem={setIsNewItem}/>
    </div>
  );
}

export default Admin;