import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import About from '~/components/About/About';
import Projects from '~/components/Projects/Projects';
import Skills from '~/components/Skills/Skills';
import Contact from '~/components/Contact/Contact';

import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';

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
                <Contact />
            </main>

            {/* <ScrollToTop /> */}
            <Footer />
        </div>
    );
}

export default App;
