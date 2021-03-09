import React from 'react';
import Winds from './imgs/wind.png';
import './styles/Wind.css'
function Wind({cos}) {
    console.log(cos.length)
    if(cos.length===0){
    return (
        <div className='wind'>
            <img
             src={Winds}></img>
        </div>
    )}
    else{
        return <div></div>
    }
}

export default Wind
