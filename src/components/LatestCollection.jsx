import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import './LatestCollection.css'
import Title from './Title'
import ProductItems from './ProductItems'

const LatestCollection = () => {
  
  const {products} = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
        setLatestProducts(products.slice(0,10));
  },[])

    return (
    <div className='latest-collections-container'>
        <div className='latest-collections-container2'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}></Title>
            <p className='latest-collections-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis eum placeat possimus? Tenetur veritatis molestias fugit nulla nesciunt consequuntur iure officia ipsam blanditiis temporibus, ratione delectus, non nostrum quos.</p>
        </div>
      
      {/* Rendering Products */}
      <div className='rendering-products-div'>
        {
          latestProducts.map((item, index)=>(
            <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}></ProductItems>
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection
