import React from 'react';
import { useStateValue } from './StateProvider';
import './styles/Product.css'

function Product({key,title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket =() =>{
        console.log('this is the basket >>>', basket)
        //dispatch the item into the Data layer
        dispatch({
            type: 'ADAUGA_IN_COS',
            item:{
                key:key,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        })
    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <strong>{price}</strong>
                    
                    <small> Lei</small>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map(()=>(
                        <p>⭐</p>
                        ))}
                 
                </div>
            </div>
            <img className='product_image' src={image}></img>
            <button onClick ={addToBasket} >Adauga in cos</button>
        </div>
       
    )
}

export default Product;
