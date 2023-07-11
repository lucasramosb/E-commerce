import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './contexts/user.context';
import CategoryContextProvider from './contexts/categories.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoryContextProvider>
        <App/>
      </CategoryContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
