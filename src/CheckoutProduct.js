import React from 'react';
import { useStateValue } from './StateProvider';
import './styles/CheckoutProduct.css';
function CheckoutProduct({id, image, title, price, rating}) {
    const[{cos}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        //remove the item from the cos
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,

        })
    }
    return (
        <>
        <div className ='checkoutProduct'>
            <img className ='checkoutProduct_image' src={image}></img>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <strong>{price}</strong>
                    <small> Lei</small>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating).fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Sterge produs</button>
            
            </div>
            
        </div>
        <hr/>
        </>
    )
}

export default CheckoutProduct
