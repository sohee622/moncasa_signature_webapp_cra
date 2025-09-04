
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Global from './Global';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Global />
  </BrowserRouter>
);

reportWebVitals();
