import React from 'react';
import Left from './Left';
import Right from './Right';
import './css.css';

function V2 (props) {
    return <div className='flex'>
        <Left />
        <Right />
    </div>;
}

export default V2;
