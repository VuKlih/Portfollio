import { useContext, useState } from 'react';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import './Navbar.module.scss';
import { ThemeContext } from '~/contexts/theme';
import { projects, skills, contact, blog } from '~/portfolio';

const cx = classNames.bind(styles);

const Navbar = () => {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext);
    const [showNavList, setShowNavList] = useState(false);

    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className={cx('center', 'nav')}>
            <ul 
                style={{ display: showNavList ? 'flex' : null }} 
                className={cx('nav__list')}
            >
                {projects.length ? (
                    <li className={cx('nav__list-item')}>
                        <a href="#projects" onClick={toggleNavList} className={cx('link', 'link--nav')}>
                            Projects
                        </a>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className={cx('nav__list-item')}>
                        <a href="#skills" onClick={toggleNavList} className={cx('link', 'link--nav')}>
                            Skills
                        </a>
                    </li>
                ) : null}

                {blog.length > 0 ? (
                    <li className={cx('nav__list-item')}>
                        <a href="#blogs" onClick={toggleNavList} className={cx('link', 'link--nav')}>
                            Blogs
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className={cx('nav__list-item')}>
                        <a href="#contact" onClick={toggleNavList} className={cx('link', 'link--nav')}>
                            Contact
                        </a>
                    </li>
                ) : null}


            </ul>

            <button
                type="button"
                onClick={toggleTheme}
                className={cx('btn', 'btn--icon', 'nav__theme')}
                aria-label="toggle theme"
            >
                {themeName === 'dark' ? <WbSunnyIcon /> : <Brightness2Icon />}
            </button>

            <button
                type="button"
                onClick={toggleNavList}
                className={cx('btn', 'btn--icon', 'nav__hamburger')}
                aria-label="toggle navigation"
            >
                {showNavList ? <CloseIcon /> : <MenuIcon />}
            </button>
        </nav>
    );
};

export default Navbar;
