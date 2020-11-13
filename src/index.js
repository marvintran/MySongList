import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './App';
import { FilterProvider } from './components/filter-context';

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
     <App />
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);