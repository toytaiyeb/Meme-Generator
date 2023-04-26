import React from 'react';
import logo from "./images/Logo.png"
export default function Header(){
    return (
        <div className='Header--container'>
            <img className="Header--logo" src={logo} alt='logo' />
            <h2 className='Header--h2'>BEST MEME GENERATOR FOR THE GEN-Z IN YOU</h2>
        </div>
    )
}