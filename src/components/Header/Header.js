import React from 'react';
import './Header.css';
import logo from '../../Images/lionlove.jpg';

export default function Header(){
    return (
        <div className='header'>
         <h1>Word Bank</h1>
         <img className='logo' src={logo} alt="Lions bonding together" />
        </div>
    )
}