import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import routes from "./js/routes";
import navRoutes from "./js/routes/navRoutes";
import store from "./js/store";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Router>{routes}</Router></Provider>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><Router>{navRoutes}</Router></Provider>, document.getElementById("nav"));
registerServiceWorker();
