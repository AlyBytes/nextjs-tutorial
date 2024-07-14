import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'


const ProductCard = () => {
  return (
    <div>
        <div className={styles.card}>ProductCard</div>
        {/* now only one interactive comp-t is on client side and react will inject it where it belong when time comes */}
<div><AddToCart /> </div>   
        {/* cannot add INTERACTIVE componenets becuase server side comp-s cannot handle browser events */}
    {/* <button onClick={()=> console.log("button here")}> Click to Add</button> */}
    {/* one options is to make entire comp-t a client component by adding adirective at the very top 'use client'; */}
   {/* this tells NextJS compiler to add this file in our next bundle  */}
   {/* this means if this comp-t dependent on other components they will automatically become client comp-s and be added to the JS bundle */}
    
    {/* a better way to move this button to the client ----> extract this BUTTON ONLY and put it inside a separate comp-t  */}
    </div>
   ) 
}

export default ProductCard