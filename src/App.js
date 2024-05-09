import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { About, Projects, Skills, Blogs, Contact, ScrollToTop } from '~/components/Main';


const cx = classNames.bind(styles);

function App() {
    const [{ themeName }] = useContext(ThemeContext);

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
