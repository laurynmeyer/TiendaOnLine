import React from 'react';
import { initializeApp } from "firebase/app";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const firebaseConfig = {
  apiKey: "AIzaSyA8FSB25gSfB7yYxy5BL8oglZddi8uWAvM",
  authDomain: "tienda-online-64446.firebaseapp.com",
  projectId: "tienda-online-64446",
  storageBucket: "tienda-online-64446.appspot.com",
  messagingSenderId: "319531970921",
  appId: "1:319531970921:web:b887b646f984e122464df8"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
