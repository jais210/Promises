import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'redux-zero/react';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const Promises = () => (
        <Provider store={store}>
             <App />
        </Provider>

)
    
ReactDOM.render(<Promises />, document.getElementById('root'));
registerServiceWorker();
