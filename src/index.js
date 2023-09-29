import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
