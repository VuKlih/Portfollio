import classNames from 'classnames/bind';
import styles from './About.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Lottie from 'react-lottie';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { about } from '~/portfolio';
import animationData from '~/assets/coder_girl';

const cx = classNames.bind(styles);

const About = () => {
    const { name, role, description, resume, social } = about;
   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const [text] = useTypewriter({
      words: [`Hi, I am ${name}!` ],
      typeSpeed: 100,
      loop: {},
    });

    return (
        <div className={cx('about', 'center')}>
            <div className={cx('infor')}>
                {name && (
                    <h1>
                        <span className={cx('about__name')}>
                            {text}
                        </span>
                        <Cursor cursorColor='#2978b5' cursorStyle='_' />
                    </h1>
                )}

                {role && <h2 className={cx('about__role')}>A {role}.</h2>}
                <p className={cx('about__desc')}>{description}</p>

                <div className={cx('about__contact', 'center')}>
                    {resume && (
                        <a href={resume}>
                            <span type="button" className={cx('btn', 'btn--outline')}>
                                Resume
                            </span>
                        </a>
                    )}

                    {social && (
                        <>
                            {social.github && (
                                <a
                                    href={social.github}
                                    aria-label="github"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cx('link', 'link--icon', 'margin-R')}
                                >
                                    <GitHubIcon />
                                </a>
                            )}

                            {social.linkedin && (
                                <a
                                    href={social.linkedin}
                                    aria-label="linkedin"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cx('link', 'link--icon', 'margin-R')}
                                >
                                    <LinkedInIcon />
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className={cx('animation')}>
                <Lottie options={defaultOptions} height={320} width={320} />
            </div>
        </div>
    );
};

export default About;
