import classNames from 'classnames/bind';
import styles from './About.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { about } from '~/portfolio'

const cx = classNames.bind(styles);


const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className={cx('about', 'center')}>
      {name && (
        <h1>
          Hi, I am <span className={cx('about__name')}>{name}.</span>
        </h1>
      )}

      {role && <h2 className={cx('about__role')}>A {role}.</h2>}
      <p className={cx('about__desc')}>{description && description}</p>

      <div className={cx('about__contact', 'center')}>
        {resume && (
          <a href={resume}>
            <span type='button' className={cx('btn', 'btn--outline')}>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className={cx('link link--icon')}
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className={cx('link' , 'link--icon')}
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
