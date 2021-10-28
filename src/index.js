import React from 'react'
import ReactDOM from 'react-dom'
import './Assets/css/tailwind.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CookiesProvider } from 'react-cookie'
import NotificationStore from './helpers/notificationHandling/NotificationContext'
import PopUpStore from './helpers/popUpHandling/PopUpContext'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <NotificationStore>
        <PopUpStore>
          <App />
        </PopUpStore>
      </NotificationStore>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
