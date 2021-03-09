import React from 'react';
import Product from './Product';
import './styles/MyProduct.css'


function MyProduct({products}) {
    return (
        <div className='Products'>
            {products.map((product,i)=>{
                return(
                            <div className='product'>
                                <Product
                                key = {products[i].id}
                                title ={products[i].title}
                                rating ={products[i].rating}
                                price ={products[i].price}
                                image ={products[i].image}
                                />
                            </div>
                        
                )
            })}
        </div>
    )
}

export default MyProduct
