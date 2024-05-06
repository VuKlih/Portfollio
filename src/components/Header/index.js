import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { header } from '~/portfolio';
import Navbar from '../Navbar/Navbar';

const cx = classNames.bind(styles);
function Header() {
    const { homepage, title } = header;

    return (
        <header className={cx('header', 'center')}>
            <h3>
                {homepage ? (
                    <a href={homepage} className={cx('link')}>
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h3>
            <Navbar />
        </header>
    );
}

export default Header;
