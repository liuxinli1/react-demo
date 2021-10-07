import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NavbarDemo from './DemoApp/NavbarDemo';
import InputField from './DemoApp/Components/InputField';
//import ButtonDemo from './DemoApp/ButtonDemo';
import ButtonDemo2 from './DemoApp/Components/ButtonDemo2';
import TextArea from './DemoApp/Components/TextArea';

import reportWebVitals from './reportWebVitals';
import 'materialize-css';

ReactDOM.render(
  <React.StrictMode>
    <NavbarDemo />
    <InputField />
    <ButtonDemo2 />
    <TextArea/ >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
