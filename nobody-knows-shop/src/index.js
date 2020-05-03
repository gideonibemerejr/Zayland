import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Client from 'shopify-buy';
import '../node_modules/tachyons/css/tachyons.min.css';

const client = Client.buildClient({
  storefrontAccessToken: 'd178c1baf5dc2f134fd6bc13b1ce61fa',
  domain: 'zayland-store.myshopify.com',
});

ReactDOM.render(
  <React.StrictMode>
    <App client={client} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
