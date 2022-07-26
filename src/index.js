import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/plugins/bootstrap-4.3.1-dist/css/bootstrap.min.css';
import './assets/css/dashboard.css';
import './assets/plugins/select2/select2.min.css';
import './assets/css/icons.css';
import './assets/plugins/Horizontal2/Horizontal-menu/dropdown-effects/fade-down.css';
import './assets/plugins/Horizontal2/Horizontal-menu/horizontal.css';
import './assets/plugins/cookie/cookie.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './assets/plugins/scroll-bar/jquery.mCustomScrollbar.css';
import './assets/webslidemenu/color-skins/color10.css';
import 'font-awesome/css/font-awesome.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
