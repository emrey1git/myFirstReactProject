import React from 'react'

const Product = ({productName, price, alt}) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <h2>{productName}</h2>
        <p>Açıklama: {alt}</p>
        <p>Fiyat: {price} TL</p></div>
        
        
    </div>
  )
}

export default Product