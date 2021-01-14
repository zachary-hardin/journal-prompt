import React from 'react';

function NavBar() {
  return (
    <nav className={'navbar sticky-top navbar-expand-lg navbar-dark bg-dark'}>
      <div className={'container'}>
        <span className={'navbar-brand mb-0 h1'}>Journal Prompt Project</span>
        <form className="form-inline my-2 my-lg-0">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className={'nav-link mr-sm-3'} href="/">Prompt Generator</a>
            </li>
            <li className="nav-item active">
              <a className={'nav-link mr-sm-3'} href="#">Admin ⚙️</a>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;