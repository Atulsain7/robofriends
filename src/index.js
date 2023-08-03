import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Hello from './Hello'
// import Card from './card';
import App from './containers/App';
// import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import { robots } from './robots';

// commented due to "Not working"
// ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));

const root = ReactDOM.createRoot(/*<card />,*/ document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
