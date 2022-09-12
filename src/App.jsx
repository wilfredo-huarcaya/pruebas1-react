// pruebas

import React from 'react'

import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

import './App.scss'

// Prueba ejemplo

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <div className="shopping-container">
        <ShoppingCart />
      </div>
      <div>
        <h1>Product List</h1>
        <ProductList />
      </div>
    </div>
  </>
)

export default App
