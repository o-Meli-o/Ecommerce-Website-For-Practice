import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
import './ProductItems.css'

const ProductItems = ({id,image,name,price}) => {

        const {currency} = useContext(ShopContext);

  return (
    <Link className='product-item-link' to={`/product/${id}`}>
            <div className='product-item-link-div1'>
                <img id='product-item-img' src={image[0]} alt="" />
            </div>
            <p className='product-item-link-p1'>{name}</p>
            <p className='product-item-link-p2'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItems
