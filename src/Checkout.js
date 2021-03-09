import React from 'react';
import './styles/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import Wind from './Wind';

function Checkout() {
    
    const [{cos}, dispatch] = useStateValue();

    const checkoutProducts = cos.map(item =>(
        <CheckoutProduct
        id ={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
    ));
    
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'></img>
                <div>
                    <h2 className='checkout_title'>Cosul tau de cumparaturi</h2>
                    
                    {checkoutProducts}
                    
                    <Wind cos={cos}/>

                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;
