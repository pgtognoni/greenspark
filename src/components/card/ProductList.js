import React from 'react'
import ProductCard from './ProductCard'

function ProductList({data, setSelected, selected}) {
  return (
    <div className='list-container'>
      <h1 className='list-title'>Per product widgets</h1>
      <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center'>
          {data.length > 0 && data.map((item, index) => {
              return <ProductCard key={index} data={item} setSelected={setSelected} selected={selected} />
          })}
      </div>
    </div>
  )
}

export default ProductList