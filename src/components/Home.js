import React from 'react'
import './Home.css'
import Product from './Product'
import { productDetails } from '../data/constants'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/JanART/GW/T2/new/PC_Hero_3000x1200_deals_ho._CB585932732_.jpg' alt='home page image'/>
        <div className='home__row'>
          {productDetails.map((product,index) => (
            <Product key={index} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home