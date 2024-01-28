import { ResumeLink, GithubLink, LinkedinLink } from './SocialLinks';
import { motion } from 'framer-motion';

interface Props {
  scrollToProjects: () => void;
}

interface SocialLinkProps {
  className?: string;
}

function Header({ scrollToProjects }: Props): JSX.Element {
  const headerLinkProps: SocialLinkProps = {
    className: '',
  };

  return (
    <nav>
      <div className='space-between'>
        <div className='logo'>SR</div>
        <ul className='nav-list'>
          <li>
            <motion.a
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05, cursor: 'pointer' }} 
              whileTap={{ scale: 0.95 }}
              title={'View Samuel\'s resume'}
              onClick={scrollToProjects} 
              
            >
              Projects
            </motion.a>
          </li>
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
