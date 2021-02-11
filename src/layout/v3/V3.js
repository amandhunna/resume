import React from 'react';
import Header from './Header';
import Right from './Right';
import Left from './Left';
import './v3.css'

function V3(props) {
    return (
        <div>
            <Header />
           <div className='v3-body flex'>
             <Left />
             <Right />
           </div> 
        </div>
    );
}

export default V3;