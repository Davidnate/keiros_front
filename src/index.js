import React from 'react'
import store from './app/store'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)


