import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import mainreducer from "./reducers/index";


const store = createStore(mainreducer);


ReactDOM.render(
    <Provider store={store}>
      <App />
  </Provider>
    , document.getElementById('root'));
registerServiceWorker();
