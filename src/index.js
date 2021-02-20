import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

/* ReactDOM objectini render degan methodi ikkita argument qabul qilarkan: 
1) Nimalar render bo'lishi (<React.StrictMode> ichida)
2) Qayerga render bo'lishi (document.getElementById('root') HTMLdagi root degan id ichiga) */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
