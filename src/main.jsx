import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextProvider from './ContextProvider/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
   <RouterProvider router={router}></RouterProvider>
   </ContextProvider>
  </React.StrictMode>,
)
