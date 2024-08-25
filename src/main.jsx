import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
  import './index.css'
  import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@material-tailwind/react";
import "flowbite";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider>
      <App />
    <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
)
