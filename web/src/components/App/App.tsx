import { useState } from 'react';
import Habit from '../Habit/Habit';
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Habit completed={3}/>
    </div>
  )
}

export default App
