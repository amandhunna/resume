import React from 'react';
import { Left } from "./component";
import { Right } from "./component";
import { Footer } from "./component";

const App = () => {
  return (
    <div>
      <div className='main'>
        <Left />
        <Right />
      </div>
      <Footer />
    </div >
  );
}

export default App;
