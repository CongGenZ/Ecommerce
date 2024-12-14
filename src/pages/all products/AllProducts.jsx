import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Products from './../../components/products/Products';
import { allProducts } from '../../data';
import Footer from '../../components/footer/Footer';
const AllProducts = () => {
  return (
    <div>
      <Navbar/>
      <Products heading="products" items={allProducts}/>
      <Footer/>
    </div>
  )
}

export default AllProducts
