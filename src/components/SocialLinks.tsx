import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

interface SocialLinkProps {
  className?: string
}


export function ResumeLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://drive.google.com/file/d/1otKqt_W9oHB9rft_S9Rp7_chFpvi2xyQ/view?usp=sharing'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={'View Samuel\'s resume'}
      className={className}
    >
      Resume
    </motion.a>
  )
}

export function GithubLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://github.com/samuelRodriguezA'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={'Go to Samuel\'s GitHub'}
      className={className}
    >
      <FaGithub />
    </motion.a>
  )
}

export function LinkedinLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://www.linkedin.com/in/samuel-rodriguez-armesto/'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title='Connect with Samuel on LinkedIn'
      className={className}
    >
      <FaLinkedin />
    </motion.a>
  )
}


export function MailLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='mailto:samuelrodriguezarmesto@gmail.com'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title='Send Samuel an email'
      className={className}
    >
      <IoIosMail style={{ transform: 'scale(1.2)' }} />
    </motion.a>
  )
}
