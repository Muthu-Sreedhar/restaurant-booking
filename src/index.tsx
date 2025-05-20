import React from 'react';
import ReactDOM from 'react-dom/client'; // ⬅️ use 'react-dom/client'
import './index.css';
import App from './App';
import './App.css';
import { AuthProvider } from "../src/context/AuthContext";

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
