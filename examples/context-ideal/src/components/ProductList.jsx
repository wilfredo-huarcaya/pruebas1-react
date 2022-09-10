import React, { useEffect } from 'react'

import ProductItem from './ProductItem'
import { useAppContext } from '../store'
import getProducts from '../service/products'

const ProductList = () => {
  const { state, dispatch } = useAppContext()

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts()
      const action = {
        type: 'SET_PRODUCTS',
        payload: products
      }
      dispatch(action)
    }

    fetchData()
  }, [])

  return (
    <div className="product-container">
      {state.products.map((product, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ProductItem key={index} product={product} />
      ))}
    </div>
  )
}

export default ProductList
