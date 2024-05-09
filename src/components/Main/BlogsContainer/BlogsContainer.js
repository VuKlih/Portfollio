import classNames from 'classnames/bind';
import styles from './BlogsContainer.module.scss';

const cx = classNames.bind(styles);

function BlogsContainer() {
    return (
        <div className={cx('blog')}>
            <div className={cx('blog-image')}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0Fr1oEX9PZURzf_COP6Cqd07CBLOAWDecQt_gFtdsg&s' alt='blog_image' />
            </div>
            <div className={cx('blog-infor')}>
                <p className={cx('blog-dateCreated')}>7/5/2024</p>
                <h3>How To Find Out Beautiful Workspace</h3>
                <p className={cx('blog__description')}>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                <button className={cx('btn', 'btn--outline')}>Read more</button>
            </div>

        </div>
    );
}

export default BlogsContainer;
