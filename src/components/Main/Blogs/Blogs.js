import classNames from 'classnames/bind';
import styles from './Blogs.module.scss';
import BlogsContainer from '../BlogsContainer/BlogsContainer';
import React, {useEffect} from 'react';

const cx = classNames.bind(styles);

function Blogs() {
    const [blogs, setBlogs] = React.useState([]);

    useEffect(() => {
        async function fetchDataFromAPIEndpoint() {
            const response = await fetch('/.netlify/functions/fetchNotion');
            const data = await response.json();
            setBlogs(data.results);
        }

        fetchDataFromAPIEndpoint();
    }, []);

    console.log(blogs)

    return (
        <section className={cx('section', 'blogs')} id="blogs">
            <h2 className={cx('section__title')}>Blogs</h2>
            <div className={cx('blogs__grid')}>
                {blogs.map((blog, index) => (
                    <BlogsContainer key={index} blog={blog}/>))}
            </div>
        </section>
    );
}

export default Blogs;
