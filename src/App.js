import React from 'react';
import logo from './logo.svg';
import './App.css';
import Left from "./component/left";
import Right from "./component/right";

function App() {
  return (
    <div>
      <div className='main'>
        <Left />
        <Right />
      </div>
      <footer className='goGreen'>
        <p>Please visit <a href="https://amanjotsinghdhunna.github.io/profileintro/">
          https://amanjotsinghdhunna.github.io/profileintro/ </a>to get copy of this resume.
            #SAVEPAPER#GOGREEN</p>
      </footer>
    </div >
  );
}

export default App;
