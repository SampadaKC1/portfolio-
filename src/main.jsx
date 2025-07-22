import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import './index.css'
import { ThemeProvider } from './Context/ThemeContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     
      <ThemeProvider> 
       <App/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
