import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';

import './styles/global.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import rootReducer from './store/Timers/store';

const store = legacy_createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
