import React  from 'react';
import NewPromptForm from './NewPromptForm';

function Admin() {
  return (
    <div className={'container spacer-2'}>
      <h1>Admin</h1>
      <NewPromptForm />
    </div>
  );
}

export default Admin;