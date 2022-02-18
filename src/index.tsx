import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DataLayerProvider} from "./contexts/Datalayer";
import {ThemeProvider} from "./contexts/Theme/theme";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
          <DataLayerProvider>
                <App />
          </DataLayerProvider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
