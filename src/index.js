import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';

import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from './contexts/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
