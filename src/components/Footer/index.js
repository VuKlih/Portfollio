import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx("footer")}>
            <a href="https://github.com/rajshekhar26/cleanfolio" className={cx("link", "footer__link")}>
                Created By Khanh Linh
            </a>
        </footer>
    );
}

export default Footer;
