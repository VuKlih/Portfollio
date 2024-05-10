import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
// import { NotionRenderer } from 'react-notion';
// import { useState, useEffect } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { About, Projects, Skills, Blogs, Contact, ScrollToTop } from '~/components/Main';

const cx = classNames.bind(styles);

function App() {
    const [{ themeName }] = useContext(ThemeContext);

    // const [data, setData] = useState({});

    // useEffect(() => {
    //     // notion-api-worker
    //     fetch('notion-api.splitbee.io/v1/page/103df9f8c2a1429d9fe98d3e0fd1b74f')
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);

    return (
        <div id="top" className={cx({ [themeName]: themeName }, 'app')}>
            <Header />

            <main>
                <About />
                <Projects />
                <Skills />
                <Blogs />
                <Contact />
            </main>

            <ScrollToTop />

            <Footer />
        </div>
    );
}

export default App;
