import React from 'react';
import './styles/Subtotal.css';
import CurrencyFormat from  'react-currency-format';
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { getCosTotal } from './Reducer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Plata from './Plata';


function Subtotal() {
    const [{cos}] = useStateValue();
    let bool;

    if(cos.length>0 ){
        bool = true;
    }
    else{
        bool = false;
    }

    console.log(bool)
    let produs;
    if(cos.length===1){
        produs='produs'
    }
    else{
        produs='produse'
    }
    return (
       
            <div className='subtotal'>
                

            <CurrencyFormat 
                renderText={(value)=>(
                    <div>
                    <p>
                        Subtotal({cos.length} {produs}):{' '}  
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox'/>Include verificare la ramburs
                    </small>
                    </div>
                )}
                decimalScale={2}
                value={getCosTotal(cos)}
                displayType={'text'}
                thousandSeparator={true}
                suffix={' Lei'}
                />

            <Link to='/plata'>
                <button style={{display: bool ? 'block' : 'none'}}>Catre plata</button>
            </Link> 
                
               
               
               
            
            </div>
          
    )
}

export default Subtotal;

