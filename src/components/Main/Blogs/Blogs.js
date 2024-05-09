import classNames from 'classnames/bind';
import styles from './Blogs.module.scss';
import BlogsContainer from '../BlogsContainer/BlogsContainer';

const cx = classNames.bind(styles);

function Blogs() {
    return (
        <section className={cx('section', 'blogs')} id="blogs">
            <h2 className={cx('section__title')}>Blogs</h2>
            <div className={cx('blogs__grid')}>
                <BlogsContainer />
                <BlogsContainer />
            </div>
        </section>
    );
}

export default Blogs;
