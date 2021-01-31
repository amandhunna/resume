import React from 'react';
import { Footer } from "./component";
import V3 from './layout/v3'
// import V2 from './layout/v2/V2';
const App = () => {
  return (
    <div>
      <div className='flex-column'>
        <V3 />
        {/* <V2 /> */}
      </div>
      <Footer />
    </div >
  );
}

export default App;
