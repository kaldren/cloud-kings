import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './App';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';

import './index.css';
import ItemProfile from './components/ItemProfile';
import MyItems from './components/MyItems';
import Layout from './components/Layout';
import New from './components/New';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>

          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/my-items" element={<MyItems />} />
            <Route path="new" element={<New />} />
            <Route path="items/:id" element={<ItemProfile />} />
          </Routes>

        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
