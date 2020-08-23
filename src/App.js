import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child.js';
import {TransactionProvider} from './transContext.js';

function App() {
  return (
    <TransactionProvider>
      <Child />      
    </TransactionProvider>
  );
}

export default App;
