import './styles/App.scss';
import React, { useReducer } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Categories from './pages/Categories';
import Timer from './pages/Timer';
import Page404 from './pages/Page404';
import { TimersContext } from './store/Timers/context';
import Layout from './components/Layout/Layout';
import timerReducer, { initialState } from './store/Timers/reducer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Page404 />,
  },
  {
    path: '/home',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Page404 />,
  },
  {
    path: '/saved',
    element: (
      <Layout>
        <Saved />
      </Layout>
    ),
    errorElement: <Page404 />,
  },
  {
    path: '/categories',
    element: (
      <Layout>
        <Categories />
      </Layout>
    ),
    errorElement: <Page404 />,
  },
  {
    path: '/timer',
    element: (
      <Layout>
        <Timer />
      </Layout>
    ),
    errorElement: <Page404 />,
  },
]);

function App() {
  const [timerState, timerDispatch] = useReducer(timerReducer, initialState);
  const timerContextValue = {
    timerState,
    timerDispatch,
  };

  return (
    <TimersContext.Provider value={timerContextValue}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </TimersContext.Provider>
  );
}

export default App;
