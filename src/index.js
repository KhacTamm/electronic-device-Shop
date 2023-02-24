import React from 'react'
import ReactDOM from 'react-dom/client'
// import reportWebVitals from './reportWebVitals'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'
// import 'antd/dist/antd.css'
import 'antd/dist/reset.css'
import 'leaflet/dist/leaflet.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        {/* <Provider> */}
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    // document.getElementById('root'),
)

// reportWebVitals()
