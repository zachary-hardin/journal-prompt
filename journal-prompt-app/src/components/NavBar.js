import React from 'react';
import {
  HashRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Prompter from './Prompter';
import Admin from './Admin';
import '../styles/prompter-styles.css';
import '../styles/general.css';
import '../styles/nav-styles.css';

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
        <span className={'navbar-toggler-icon'}/>
      </button>
    );
  }

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <nav className={'navbar sticky-top navbar-expand-lg navbar-light bg-light'}>
          <div className={'container'}>
            <span className={'grey-color font-size-30'}>the journal project</span>
            {menuToggleButton()}

            <div className={'collapse navbar-collapse justify-content-end'} id={'navbarTogglerId'}>
              <form className={'form-inline my-2 my-lg-0'}>
                <ul className={'navbar-nav nav-fill w-100'}>
                  <li className={'nav-item active text-align-left'}>
                    <Link
                      to={PROMPT_GENERATOR_LINK}
                      className={'nav-link mr-sm-2 grey-color font-size-20'}
                    >prompter</Link>
                  </li>
                  <li className={'nav-item active text-align-left'}>
                    <Link
                      to={ADMIN_LINK}
                      className={'nav-link mr-sm-2 grey-color font-size-20'}
                    >admin</Link>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path={PROMPT_GENERATOR_LINK}>
            <Prompter/>
          </Route>
          <Route path={ADMIN_LINK}>
            <Admin/>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default NavBar;