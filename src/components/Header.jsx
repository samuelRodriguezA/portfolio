import React from 'react';
import { ResumeLink, GithubLink, LinkedinLink } from './SocialLinks';

function Header() {
  return (
    <nav>
      <div className='space-between'>
        <div className='logo'>SR</div>
        <ul className='nav-list'>
          <li>
            <ResumeLink />
          </li>
          <li>
            <GithubLink className='nav-icon' />
          </li>
          <li>
            <LinkedinLink className='nav-icon' />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
