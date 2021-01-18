import React from 'react';
import {
  HashRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Prompter from './Prompter';
import Admin from './Admin';

function NavBar() {
  const PROMPT_GENERATOR_LINK = '/prompt/';
  const ADMIN_LINK = '/admin/';

  const menuToggleButton = () => {
    return (
      <button className={'navbar-toggler'}
              type={'button'}
              data-toggle={'collapse'}
              data-target={'#navbarTogglerId'}
              aria-controls={'navbarTogglerDemo02'}
              aria-expanded={'false'}
              aria-label={'Toggle navigation'}>
        <span className={'navbar-toggler-icon'} />
      </button>
    );
  }

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <nav className={'navbar sticky-top navbar-expand-lg navbar-dark bg-dark'}>
          <div className={'container'}>
            <span className={'navbar-brand mb-0 h1'}>Journal Prompt Project</span>
            {menuToggleButton()}

            <div className={'collapse navbar-collapse justify-content-end'} id={'navbarTogglerId'}>
              <form className={'form-inline my-2 my-lg-0'}>
                <ul className={'navbar-nav'}>
                  <li className={'nav-item active'}>
                    <Link
                      to={PROMPT_GENERATOR_LINK}
                      className={'nav-link mr-sm-2'}
                      data-testid={'promptGeneratorNav'}
                    >Prompter</Link>
                  </li>
                  <li className={'nav-item active'}>
                    <Link
                      to={ADMIN_LINK}
                      className={'nav-link mr-sm-2'}
                      data-testid={'adminNav'}
                    >Admin ⚙️</Link>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path={PROMPT_GENERATOR_LINK}>
            <Prompter />
          </Route>
          <Route path={ADMIN_LINK}>
            <Admin />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default NavBar;