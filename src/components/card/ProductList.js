import React from 'react'
import ProductCard from './ProductCard'

function ProductList({data, setSelected, selected}) {
  return (
    <div className='list-container'>
      <h1 className='list-title'>Per product widgets</h1>
      <div className='items-container d-flex flex-column flex-lg-row justify-content-between align-items-center'>
          {data.length > 0 && data.map((item, index) => {
              return <ProductCard key={index} data={item} setSelected={setSelected} selected={selected} />
          })}
      </div>
    </div>
  )
}

export default ProductList