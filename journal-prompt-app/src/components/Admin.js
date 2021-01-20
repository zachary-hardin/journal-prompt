import React from 'react';
import NewPromptForm from './NewPromptForm';
import PromptsTable from './PromptsTable';

function Admin() {
  return (
    <div className={'container spacer-2'}>
      <h1>Admin</h1>
      <br/>

      <NewPromptForm/>
      <br/>

      <PromptsTable />
    </div>
  );
}

export default Admin;