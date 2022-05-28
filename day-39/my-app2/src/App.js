import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Success } from'./Component/Authenticate';
import { Forms } from'./Component/Forms';

function App() {
  return(
    <div>
      <h1>Simple Form</h1>
      <Forms />
      <Success />
    </div>
  )
}
export default App;
