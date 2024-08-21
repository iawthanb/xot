import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../src/styles/global.scss';
import '../src/styles/variables.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import rootReducer from './store/Timers/store';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
