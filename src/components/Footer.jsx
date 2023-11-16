import React from 'react';
import { ResumeLink, GithubLink, LinkedinLink, MailLink } from './SocialLinks';

function Footer() {
  return (
    <footer>
      <h2>Connect with me</h2>
      <ul className='footer-links'>
        <li>
          <ResumeLink />
        </li>
        <li>
          <GithubLink />
        </li>
        <li>
          <LinkedinLink />
        </li>
        <li>
          <MailLink />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
