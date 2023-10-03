import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './components/clock/clock'
import {TextComponent} from './components/textComponent/textComponent'
import { EmdrOne } from '../src/resources/emdrOne'
import { Main } from './components/page/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Main />
      </header>
    </div>
  );
}

export default App;
