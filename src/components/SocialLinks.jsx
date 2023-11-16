import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export function ResumeLink({ className = '' }) {
  return (
    <a
      href='https://docs.google.com/document/d/1FVFnmQVxn_VLWa4wy7mLYudvzY478cev/edit?usp=sharing&ouid=110622531979936320839&rtpof=true&sd=true'
      target='_blank'
      rel='noopener noreferrer'
      title="View Samuel's resume"
      className={className}
    >
      Resume
    </a>
  );
}

export function GithubLink({ className = '' }) {
  return (
    <a
      href='https://github.com/samuelRodriguezA'
      target='_blank'
      rel='noopener noreferrer'
      title={"Go to Samuel's GitHub"}
      className={className}
    >
      <FaGithub />
    </a>
  );
}

export function LinkedinLink({ className = '' }) {
  return (
    <a
      href='https://www.linkedin.com/in/samuel-rodriguez-armesto/'
      target='_blank'
      rel='noopener noreferrer'
      title='Connect with Samuel on LinkedIn'
      className={className}
    >
      <FaLinkedin />
    </a>
  );
}

export function TwitterLink({ className = '' }) {
  return (
    <a
      href='https://twitter.com'
      target='_blank'
      rel='noopener noreferrer'
      title='Follow Samuel on Twitter'
      className={className}
    >
      <FaTwitter />
    </a>
  );
}

export function MailLink({ className = '' }) {
  return (
    <a
      href='mailto:samuelrodriguezarmedto@gmail.com'
      target='_blank'
      rel='noopener noreferrer'
      title='Send Samuel an email'
      className={className}
    >
      <IoIosMail style={{ transform: 'scale(1.2)' }} />
    </a>
  );
}
