import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import AllReducers from './reducers/index'

import App from './components/app';

const store = createStore(AllReducers)


render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));