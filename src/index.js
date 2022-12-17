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
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
