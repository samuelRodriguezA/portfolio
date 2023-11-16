import React from 'react';
import { MdKeyboardArrowDown as ArrowDownIcon } from 'react-icons/md';
import Header from './Header';

function CoverPage({ scrollToProjects }) {
  return (
    <div className='coverPage main'>
      <Header />
      <main>
        <div className='cta'>
          <h1 className='title'>
            I create <span className='playful'>playful</span> experiences.
          </h1>
          <div className='pfp-container'>
            <img src='/images/cat.png' alt='My pfp' className='pfp-image' />
            
          </div>
        </div>
        <h3 className='job-title'>Samuel Rodriguez Armesto / Software Developer</h3>
        <button className='scroll-indicator' onClick={scrollToProjects}>
          <span>Projects</span>
          <ArrowDownIcon />
        </button>
      </main>
    </div>
  );
}

export default CoverPage;
