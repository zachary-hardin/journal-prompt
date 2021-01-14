import React from 'react';

function Admin() {
  return (
    <div className={'container spacer-2'}>
      <h1>Admin</h1>

      <form className={''}>
        <div className={'form-group'}>
          <label for={'promptInput'}>Enter a prompt</label>
          <div className={'form-row'}>
            <input
              id={'promptInput'}
              className={'form-control col-md-10 mr-3'}
              type="text"
              placeholder={'Ex: What\'s your favorite outdoor activity?'}
            />
            <button className={'btn btn-primary col-md-1'} type={'submit'}>Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Admin;