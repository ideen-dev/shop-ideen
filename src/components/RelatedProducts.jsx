import React, { useEffect, useState } from 'react'
import Title from './Title'
import { products } from '../assets/data'
import Item from './Item'

const RelatedProducts = ({category}) => {

  const [RelatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {

    const data = products.filter(item => item.category===category)
    setRelatedProducts(data.slice(0,5))
  },[products]
  )


  return (
    <section className='py-16'>
      <Title
        title1={"Related"}
        title2={"Products"}
        titeStyles={"pb-10"}
        paraStyles={"!block"}

      />
      {/* CONTAINER */}
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 '>
        {RelatedProducts.map((product) => (
          
          <div key={product._id}>
              <Item product={product} />
          </div>

        ))}
      </div>

    </section>
  )
}

export default RelatedProducts