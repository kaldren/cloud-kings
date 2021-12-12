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
import Login from './components/Login';

import { RequireAuth, RequireNotAuth } from './authMiddleware';
import UserProfile from './components/UserProfile';
import Oops from './components/Oops';
import Likes from './components/Likes';
import Search from './components/Search';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>

          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/oops" element={<Oops />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={
              <RequireNotAuth>
                <Login />
              </RequireNotAuth>
            } />
            <Route path="users/:id" element={<UserProfile />} />
            <Route path="items/:id" element={<ItemProfile />} />
            <Route path="/my-items" element={
              <RequireAuth>
                <MyItems />
              </RequireAuth>
            } />
            <Route path="new" element={
              <RequireAuth>
                <New />
              </RequireAuth>
            } />
            <Route path="likes" element={
              <RequireAuth>
                <Likes />
              </RequireAuth>
            } />
          </Routes>

        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
