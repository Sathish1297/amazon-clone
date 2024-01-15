import React from 'react'
import './Checkout.css'
import { useStateValue } from '../providers/StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

  return (
    <div>
      <img className='checkout__ad'
      src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
      />
    <div className='checkout'>
      <div className='checkout__left'>
        <h2 className='checkout__title'> Shopping Cart
            {basket.map((item) => (
                <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
            ))}
        </h2>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
    </div>
  )
}

export default Checkout