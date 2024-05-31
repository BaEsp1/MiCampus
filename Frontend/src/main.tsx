import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store.ts'
import Navbar from './Components/NavBAr/NavBar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <Navbar/>
    <App />
    </Provider>
  </React.StrictMode>,
);
