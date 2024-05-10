import classNames from 'classnames/bind';
import styles from './BlogsContainer.module.scss';

const cx = classNames.bind(styles);

function BlogsContainer({blog}) {
    return (
        <div className={cx('blog-item')}>
                {/* <div key={blog.id} className={cx('blog-item')}> */}
                    <div className={cx('blog-image')}>
                        <img src={blog.properties.Image.files[0].external.url} alt="blog_image" />
                    </div>
                    <div className={cx('blog-infor')}>
                        <h3>{blog.properties.Name.title[0].plain_text}</h3>
                        <p className={cx('blog__description')}>
                            {blog.properties.Content.rich_text[0].plain_text}
                        </p>
                        <a href={blog.properties.Link.url} className={cx('btn', 'btn--outline', 'btn-link')}>
                            {blog.properties.Btn_text.rich_text[0].plain_text}
                        </a>
                    </div>
                {/* </div> */}
        </div>
    );
}

export default BlogsContainer;