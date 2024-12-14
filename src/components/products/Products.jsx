import React from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/cartSlice';

const Products = ({ items, heading }) => {
    const dispstch = useDispatch()

    const handleAddToCart = (product)=>{
        dispstch(addCart(product))
    }
 const navigate = useNavigate()
 const handleViewDetails = (id =>{
    navigate(`/product/${id}`)
 })
  return (
    <div>
      <h1 className="heading">{heading}</h1>
      <div className="products-container">
        {Array.isArray(items) &&
          items.map((item) => (
            <div key={item.id} className="product-container">
              <img src={item.img} alt="" className="product-image" />
              <div className="product-desc">
                <h3>{item.title}</h3>
                <span>${item.price}</span>
              </div>
              <div className="product-info">
                <button className="icon" onClick={()=>handleAddToCart(item)}>
                  <CiShoppingCart /> Add To Cart
                </button>

                <button className="icon" onClick={()=>handleViewDetails(item.id)}>
                  <CiSearch /> View Detail
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
