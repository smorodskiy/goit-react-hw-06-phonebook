import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';

// Theme
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants';

// Redux provider
import { Provider } from 'react-redux';

// Normalize style
import GlobalStyle from './globalStyle';

// Redux store
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
