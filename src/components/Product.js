import React from 'react'
import './Product.css'
import { useStateValue } from '../providers/StateProvider';

function Product({product}) {
  const { id, title, image, price, rating } = product;
  
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <strong>Rs {price}</strong>
        </p>
        <div className='product__rating'>
          {
            Array(rating).fill().map((_, i) => (
              <p key={i}>⭐</p>
            ))
          }
        </div>
      </div>
      <img className='product__image' src={image} alt=''/>
      <button onClick={addToBasket} className='add-to-cart'>Add to Cart</button>
    </div>
  )
}

export default Product