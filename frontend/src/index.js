import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // ← agregá esta línea

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>        {/* ← reemplazá StrictMode por esto */}
    <App />
  </BrowserRouter>
);

reportWebVitals();