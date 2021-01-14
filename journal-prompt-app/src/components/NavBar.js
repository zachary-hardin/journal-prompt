import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Prompter from './Prompter';

function NavBar() {
  const PROMPT_GENERATOR_LINK = '/journal-prompt/';
  const ADMIN_LINK = '/admin/';

  return (
    <Router>
      <div>
        <nav className={'navbar sticky-top navbar-expand-lg navbar-dark bg-dark'}>
          <div className={'container'}>
            <span className={'navbar-brand mb-0 h1'}>Journal Prompt Project</span>

            <form className={'form-inline my-2 my-lg-0'}>
              <ul className={'navbar-nav'}>
                <li className={'nav-item active'}>
                  <Link
                    to={PROMPT_GENERATOR_LINK}
                    className={'nav-link mr-sm-2'}
                    data-testid={'promptGeneratorNav'}
                  >Prompt Generator</Link>
                </li>
                <li className="nav-item active">
                  <Link to={ADMIN_LINK} className={'nav-link mr-sm-2'}>Admin ⚙️</Link>
                </li>
              </ul>
            </form>
          </div>
        </nav>

        <Switch>
          <Route path={PROMPT_GENERATOR_LINK}>
            <Prompter />
          </Route>
          <Route path={ADMIN_LINK}>
            <p className={'container spacer-2'}>🚧 Admin Under Construction 🚧</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;