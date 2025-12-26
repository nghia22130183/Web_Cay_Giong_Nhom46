import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. IMPORT REDUX
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* 2. BỌC APP TRONG PROVIDER */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)