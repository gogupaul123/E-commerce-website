import React from 'react';
import './styles/Confirmare.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Check from './imgs/check.png'

function Confirmare({user, gender}) {
    let sex;
    if(gender ===0 ){
        sex= 'domnule'
    }
    else if(gender ===1){
        sex='doamna'
    }
    else{
        sex=''
    }
    const upper = user.charAt(0).toUpperCase() + user.slice(1)
     
    return (
        <div className='confirmare_container'>
           <h1>Va multumim, {sex} {upper}! Comanda dumneavoastra a fost plasata cu succes! </h1>
            
           <img src={Check}></img> 

            <Link to='/'>
                <button>Inapoi la cumparaturi</button>
           </Link>
            
        </div>
    )
}

export default Confirmare
