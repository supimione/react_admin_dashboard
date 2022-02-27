import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import { IntlProvider } from "react-intl";

import reportWebVitals from './reportWebVitals';
import App from './App';
import GlobalStyles from "./GlobalStyles";
import { messages, language } from "./configs/translations";

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalStyles />
          <App />
        </PersistGate>
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
