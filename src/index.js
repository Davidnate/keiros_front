import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import store from './app/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(docuemnt.getElementById('root'));

root.render(
    <Provider store={store}>
        <app/>
    </Provider>
);


