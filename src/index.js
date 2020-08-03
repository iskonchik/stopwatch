import React from 'react';
import ReactDOM from 'react-dom';

import Stopwatch from './components/Stopwatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        made by patmaz{' '}
        <a
          href="https://codebooyah.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          codebooyah.com
        </a>
      </p>
      <Stopwatch />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
