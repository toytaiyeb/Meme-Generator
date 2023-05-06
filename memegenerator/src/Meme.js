import React from 'react';
import memesData from "./memesData.js"


export default function Meme(){
    


    const [memeImg,setMemeImg]=React.useState("")

    function getMemeImage(){
       
    
        const meme=memesData.data.memes
        
        const rand=Math.floor(Math.random() * meme.length)
        const imgs=setMemeImg(meme[rand].url)
        
    
    }
    
    return (
        <main className='Meme--main'>
            <div className='form'>
                <input className="form--input " type="text" name="name" />
                <input className="form--input " type="text" name="name" />
                <button  onClick={getMemeImage} className='form--button'>Get a new meme image</button>
            </div>
            <img src={memeImg} />
        </main>
    )
}